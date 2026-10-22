function filter(arr, func) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
}

function reject(arr, func) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
}

function partition(arr, func) {
  const passed = [];
  const failed = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) {
      passed.push(arr[i]);
    } else {
      failed.push(arr[i]);
    }
  }
  return [passed, failed];
}