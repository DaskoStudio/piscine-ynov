function pyramid(str, num) {
  let res = '';
  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < (num - i) * str.length; j++) {
      res += ' ';
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      res += str;
    }
    if (i < num) res += '\n';
  }
  return res;
}