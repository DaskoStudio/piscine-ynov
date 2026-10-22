function adder(arr, initial = 0) {
  return arr.reduce((acc, curr) => acc + curr, initial);
}

function sumOrMul(arr, initial = 0) {
  return arr.reduce((acc, curr) => (curr % 2 === 0 ? acc * curr : acc + curr), initial);
}

function funcExec(funcs, initial = 0) {
  return funcs.reduce((acc, fn) => fn(acc), initial);
}