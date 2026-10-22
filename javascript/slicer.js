function slice(input, start, end) {
  let s = start;
  let e = end;
  const len = input.length;

  if (s === undefined) {
    s = 0;
  }
  if (s < 0) {
    s = len + s;
  }
  if (s < 0) {
    s = 0;
  }

  if (e === undefined) {
    e = len;
  }
  if (e < 0) {
    e = len + e;
  }
  if (e > len) {
    e = len;
  }

  if (typeof input === 'string') {
    let res = '';
    for (let i = s; i < e; i++) {
      res += input[i];
    }
    return res;
  } else {
    let res = [];
    for (let i = s; i < e; i++) {
      res.push(input[i]);
    }
    return res;
  }
}