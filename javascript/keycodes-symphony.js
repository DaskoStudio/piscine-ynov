export function compose(e) {
  if (!e) return;

  if (e.key === 'Backspace') {
    const notes = document.querySelectorAll('.note');
    if (notes.length > 0) {
      notes[notes.length - 1].remove();
    }
  } else if (e.key === 'Escape') {
    const notes = document.querySelectorAll('.note');
    notes.forEach(note => note.remove());
  } else if (/^[a-z]$/.test(e.key)) {
    const note = document.createElement('div');
    note.classList.add('note');
    note.textContent = e.key;

    // Generate a unique background color using the key's character code
    const hue = (e.key.charCodeAt(0) - 97) * (360 / 26);
    note.style.background = `hsl(${hue}, 100%, 50%)`;

    document.body.append(note);
  }
}

document.addEventListener('keydown', compose);