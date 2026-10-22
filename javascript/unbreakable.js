function split(str, sep, limit) {
  const s = String(str);
  let lim = limit === undefined ? 0xFFFFFFFF : limit >>> 0;
  if (lim === 0) return [];

  if (sep === undefined) return [s];

  const separator = String(sep);
  const res = [];

  if (separator === '') {
    for (let i = 0; i < s.length; i++) {
      res.push(s[i]);
      if (res.length === lim) return res;
    }
    return res;
  }

  let start = 0;
  let pos = s.indexOf(separator, start);

  while (pos !== -1) {
    res.push(s.slice(start, pos));
    if (res.length === lim) return res;
    start = pos + separator.length;
    pos = s.indexOf(separator, start);
  }

  res.push(s.slice(start));
  return res;
}

function join(arr, sep) {
  const separator = sep === undefined ? ',' : String(sep);
  let res = '';
  for (let i = 0; i < arr.length; i++) {
    res += (arr[i] === null || arr[i] === undefined) ? '' : arr[i];
    if (i < arr.length - 1) res += separator;
  }
  return res;
}