export function build(amount) {
  let i = 1;
  const interval = setInterval(() => {
    const brick = document.createElement('div');
    brick.id = `brick-${i}`;
    
    if (i % 3 === 2) {
      brick.dataset.foundation = 'true';
    }
    
    document.body.append(brick);
    
    if (i === amount) {
      clearInterval(interval);
    }
    i++;
  }, 100);
}

export function repair(...ids) {
  ids.forEach(id => {
    const brick = document.getElementById(id);
    if (brick) {
      brick.dataset.repaired = brick.hasAttribute('data-foundation') ? 'in progress' : 'true';
    }
  });
}

export function destroy() {
  const bricks = document.querySelectorAll('div[id^="brick-"]');
  if (bricks.length > 0) {
    bricks[bricks.length - 1].remove();
  }
}