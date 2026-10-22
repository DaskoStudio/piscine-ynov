function multiply(a, b) {
  let res = 0;
  const bNegative = b < 0;
  const limit = bNegative ? -b : b;

  for (let i = 0; i < limit; i++) {
    res += a;
  }

  return bNegative ? -res : res;
}

function divide(a, b) {
  if (b === 0) return 0;
  let res = 0;
  const aNegative = a < 0;
  const bNegative = b < 0;
  let dividend = aNegative ? -a : a;
  let divisor = bNegative ? -b : b;

  while (dividend >= divisor) {
    dividend -= divisor;
    res++;
  }

  return (aNegative !== bNegative) ? -res : res;
}

function modulo(a, b) {
  if (b === 0) return 0;
  const aNegative = a < 0;
  let dividend = aNegative ? -a : a;
  let divisor = b < 0 ? -b : b;

  while (dividend >= divisor) {
    dividend -= divisor;
  }

  return aNegative ? -dividend : dividend;
}