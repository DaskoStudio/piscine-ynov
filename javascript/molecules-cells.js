function RNA(strand) {
  let res = '';
  for (let i = 0; i < strand.length; i++) {
    if (strand[i] === 'G') res += 'C';
    else if (strand[i] === 'C') res += 'G';
    else if (strand[i] === 'T') res += 'A';
    else if (strand[i] === 'A') res += 'U';
    else res += strand[i];
  }
  return res;
}

function DNA(strand) {
  let res = '';
  for (let i = 0; i < strand.length; i++) {
    if (strand[i] === 'C') res += 'G';
    else if (strand[i] === 'G') res += 'C';
    else if (strand[i] === 'A') res += 'T';
    else if (strand[i] === 'U') res += 'A';
    else res += strand[i];
  }
  return res;
}