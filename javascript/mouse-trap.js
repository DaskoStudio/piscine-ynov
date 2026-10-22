export function createCircle(e) {
  if (!e) return;
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.background = 'white';
  
  const x = e.clientX - 25;
  const y = e.clientY - 25;
  
  circle.style.left = x + 'px';
  circle.style.top = y + 'px';
  
  document.body.appendChild(circle);

  const boxElement = document.querySelector('.box');
  if (boxElement) {
    const boxRect = boxElement.getBoundingClientRect();
    if (x >= boxRect.left + 1 && x + 50 <= boxRect.right - 1 &&
        y >= boxRect.top + 1 && y + 50 <= boxRect.bottom - 1) {
      circle.setAttribute('data-trapped', 'true');
      circle.style.background = 'var(--purple)';
    }
  }
}

export function moveCircle(e) {
  if (!e) return;
  const circles = document.querySelectorAll('.circle');
  if (circles.length === 0) return;
  const circle = circles[circles.length - 1];
  
  let x = e.clientX - 25;
  let y = e.clientY - 25;
  
  const boxElement = document.querySelector('.box');
  if (!boxElement) {
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
    return;
  }
  
  const boxRect = boxElement.getBoundingClientRect();
  let isTrapped = circle.getAttribute('data-trapped') === 'true';
  
  if (!isTrapped) {
    if (x >= boxRect.left + 1 && x + 50 <= boxRect.right - 1 &&
        y >= boxRect.top + 1 && y + 50 <= boxRect.bottom - 1) {
      isTrapped = true;
      circle.setAttribute('data-trapped', 'true');
      circle.style.background = 'var(--purple)';
    }
  }
  
  if (isTrapped) {
    if (x < boxRect.left + 1) x = boxRect.left + 1;
    if (x + 50 > boxRect.right - 1) x = boxRect.right - 1 - 50;
    if (y < boxRect.top + 1) y = boxRect.top + 1;
    if (y + 50 > boxRect.bottom - 1) y = boxRect.bottom - 1 - 50;
  }
  
  circle.style.left = x + 'px';
  circle.style.top = y + 'px';
}

export function setBox() {
  const box = document.createElement('div');
  box.classList.add('box');
  document.body.appendChild(box);
}

document.addEventListener('click', createCircle);
document.addEventListener('mousemove', moveCircle);