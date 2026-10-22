function triangle(str, num) {
  let res = '';
  let line = '';
  for (let i = 1; i <= num; i++) {
    line += str;
    res += line;
    if (i < num) res += '\n';
  }
  return res;
}