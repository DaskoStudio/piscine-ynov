import { styles } from './pimp-my-style.data.js';

let counter = 0;

export function pimp() {
  const button = document.querySelector('.button');

  if (!button.classList.contains('unpimp')) {
    button.classList.add(styles[counter]);
    counter++;
    if (counter === styles.length) {
      button.classList.toggle('unpimp');
    }
  } else {
    counter--;
    button.classList.remove(styles[counter]);
    if (counter === 0) {
      button.classList.toggle('unpimp');
    }
  }
}