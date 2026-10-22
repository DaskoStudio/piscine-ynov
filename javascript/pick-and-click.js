export function pick() {
  const hsl = document.createElement('div');
  hsl.className = 'hsl';
  
  const hue = document.createElement('div');
  hue.className = 'hue text';
  
  const luminosity = document.createElement('div');
  luminosity.className = 'luminosity text';

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  axisX.id = 'axisX';
  const axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  axisY.id = 'axisY';

  svg.appendChild(axisX);
  svg.appendChild(axisY);
  
  document.body.appendChild(hsl);
  document.body.appendChild(hue);
  document.body.appendChild(luminosity);
  document.body.appendChild(svg);

  let currentHsl = '';

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    const width = window.innerWidth;
    const height = window.innerHeight;

    const h = Math.round((x / width) * 360);
    const l = Math.round((y / height) * 100);
    currentHsl = `hsl(${h}, 50%, ${l}%)`;

    document.body.style.background = currentHsl;
    hsl.textContent = currentHsl;
    hue.textContent = h;
    luminosity.textContent = l;

    axisX.setAttribute('x1', x);
    axisX.setAttribute('x2', x);
    axisX.setAttribute('y1', 0);
    axisX.setAttribute('y2', height);

    axisY.setAttribute('x1', 0);
    axisY.setAttribute('x2', width);
    axisY.setAttribute('y1', y);
    axisY.setAttribute('y2', y);
  });

  document.addEventListener('click', () => {
    if (!currentHsl) return;
    
    const copyFallback = () => {
      const input = document.createElement('input');
      input.value = currentHsl;
      document.body.appendChild(input);
      input.select();
      try {
        document.execCommand('copy');
      } catch (err) {}
      document.body.removeChild(input);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(currentHsl).catch(copyFallback);
    } else {
      copyFallback();
    }
  });
}