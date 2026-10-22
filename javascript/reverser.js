function reverse(input) {
  if (Array.isArray(input)) {
    let start = 0;
    let end = input.length - 1;
    while (start < end) {
      const temp = input[start];
      input[start] = input[end];
      input[end] = temp;
      start++;
      end--;
    }
    return input;
  }
  let res = '';
  for (let i = input.length - 1; i >= 0; i--) {
    res += input[i];
  }
  return res;
}