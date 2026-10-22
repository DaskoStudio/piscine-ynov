function map(arr, func) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(func(arr[i], i, arr));
  }
  return res;
}

function flatMap(arr, func) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let val = func(arr[i], i, arr);
    if (Array.isArray(val)) {
      for (let j = 0; j < val.length; j++) {
        res.push(val[j]);
      }
    } else {
      res.push(val);
    }
  }
  return res;
}