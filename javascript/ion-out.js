function ionOut(str) {
  return str.match(/\w*t(?=ion)/g) || [];
}