import { gossips } from './gossip-grid.data.js';

export function grid() {
  // Create the ranges wrapper
  const ranges = document.createElement('div');
  ranges.className = 'ranges';

  // Create width range input
  const widthRange = document.createElement('input');
  widthRange.type = 'range';
  widthRange.id = 'width';
  widthRange.className = 'range';
  widthRange.min = '200';
  widthRange.max = '800';

  // Create fontSize range input
  const fontSizeRange = document.createElement('input');
  fontSizeRange.type = 'range';
  fontSizeRange.id = 'fontSize';
  fontSizeRange.className = 'range';
  fontSizeRange.min = '20';
  fontSizeRange.max = '40';

  // Create background lightness range input
  const backgroundRange = document.createElement('input');
  backgroundRange.type = 'range';
  backgroundRange.id = 'background';
  backgroundRange.className = 'range';
  backgroundRange.min = '20';
  backgroundRange.max = '75';

  ranges.appendChild(widthRange);
  ranges.appendChild(fontSizeRange);
  ranges.appendChild(backgroundRange);
  document.body.appendChild(ranges);

  // Create the form which acts as the first gossip card
  const form = document.createElement('form');
  form.className = 'gossip';

  const textarea = document.createElement('textarea');
  
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Share gossip!';

  form.appendChild(textarea);
  form.appendChild(submitBtn);
  document.body.appendChild(form);

  // Dynamically update the styles for all cards
  const updateStyles = () => {
    const cards = document.querySelectorAll('.gossip');
    cards.forEach(card => {
      card.style.width = `${widthRange.value}px`;
      card.style.fontSize = `${fontSizeRange.value}px`;
      card.style.background = `hsl(281, 58%, ${backgroundRange.value}%)`;
    });
  };

  // Handle adding new gossips
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = textarea.value.trim();
    if (text) {
      const newCard = document.createElement('div');
      newCard.className = 'gossip';
      newCard.textContent = text;
      
      // Insert immediately after the form (making it the first actual gossip)
      form.insertAdjacentElement('afterend', newCard);
      textarea.value = '';
      updateStyles();
    }
  });

  // Map through the existing gossips imported from the data file
  gossips.forEach(gossip => {
    const card = document.createElement('div');
    card.className = 'gossip';
    card.textContent = gossip;
    document.body.appendChild(card);
  });

  // Listen to changes on inputs to adjust styles in real-time
  widthRange.addEventListener('input', updateStyles);
  fontSizeRange.addEventListener('input', updateStyles);
  backgroundRange.addEventListener('input', updateStyles);

  // Apply default scaling values based on default range statuses on mount
  updateStyles();
}