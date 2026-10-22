function letterSpaceNumber(str) {
  return str.match(/[a-z] \d\b/gi) || [];
}