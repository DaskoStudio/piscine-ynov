function longWords(arr) {
  return arr.every(item => typeof item === 'string' && item.length >= 5);
}

function oneLongWord(arr) {
  return arr.some(item => typeof item === 'string' && item.length >= 10);
}

function noLongWords(arr) {
  return !arr.some(item => typeof item === 'string' && item.length >= 7);
}