function flat(arr, depth = 1) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      if (Array.isArray(arr[i]) && depth > 0) {
        res = res.concat(flat(arr[i], depth - 1));
      } else {
        res.push(arr[i]);
      }
    }
  }
  return res;
}