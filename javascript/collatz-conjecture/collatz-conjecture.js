export const steps = (n) => {
  // if n is even, return n / 2
  // if n is odd, return 3n + 1
  // repeat until 1 is returned
  let s = 0;

  if (n === 1) {
    return s;
  } else if (n <= 0) {
    throw new Error('Only positive numbers are allowed');
  }

  do {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = (3 * n) + 1;
    }
    s++;
  } while (n !== 1)

  return s;
};
