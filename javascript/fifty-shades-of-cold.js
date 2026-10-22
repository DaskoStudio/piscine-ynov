import { colors } from './fifty-shades-of-cold.data.js';

export function generateClasses() {
  const style = document.createElement('style');
  // Generate a CSS string with a class for every single color in the array
  style.textContent = colors
    .map(color => `.${color} { background: ${color}; }`)
    .join('\n');
  
  document.head.append(style);
}

export function generateColdShades() {
  const coldWords = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];
  
  colors.forEach(color => {
    const isCold = coldWords.some(word => color.includes(word));
    if (isCold) {
      const div = document.createElement('div');
      div.classList.add(color);
      div.textContent = color;
      document.body.append(div);
    }
  });
}

export function choseShade(shade) {
  document.querySelectorAll('div').forEach(div => {
    if (!div.classList.contains(shade)) {
      const currentShade = colors.find(color => div.classList.contains(color));
      if (currentShade) {
        div.classList.replace(currentShade, shade);
      }
    }
  });
}