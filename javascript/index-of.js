function indexOf(arr, value, fromIndex = 0) {
  let start = fromIndex;
  if (start < 0) {
    start = arr.length + start;
    if (start < 0) {
      start = 0;
    }
  }
  for (let i = start; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

function lastIndexOf(arr, value, fromIndex = arr.length - 1) {
  let start = fromIndex;
  if (start >= arr.length) {
    start = arr.length - 1;
  }
  if (start < 0) {
    start = arr.length + start;
  }
  for (let i = start; i >= 0; i--) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

function includes(arr, value) {
  return indexOf(arr, value) !== -1;
}