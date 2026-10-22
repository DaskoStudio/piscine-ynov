function trunc(num) {
  if (num === 0) return num;
  if (isNaN(num)) return NaN;
  if (num > 0xfffffffffffff || num < -0xfffffffffffff) return num;

  const val = num > 0 ? num : -num;
  let remainder = val;
  let count = 0;

  while (remainder >= 1) {
    let step = 1;
    while (step * 2 <= remainder) {
      step *= 2;
    }
    remainder -= step;
    count += step;
  }
  return num > 0 ? count : -count;
}

function floor(num) {
  const truncated = trunc(num);
  if (num < 0 && num !== truncated) {
    return truncated - 1;
  }
  return truncated;
}

function ceil(num) {
  const truncated = trunc(num);
  if (num > 0 && num !== truncated) {
    return truncated + 1;
  }
  return truncated;
}

function round(num) {
  return floor(num + 0.5);
}
