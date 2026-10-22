function sign(n) {
  return n > 0 ? 1 : n < 0 ? -1 : 0;
}

function sameSign(a, b) {
  return sign(a) === sign(b);
}