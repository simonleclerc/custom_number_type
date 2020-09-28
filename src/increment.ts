export const increment = (inputs: string[]) => {
  return inputs
    .reverse()
    .map((input, i) => parseInt(input) * Math.pow(10, i))
    .reduce((acc, val) => acc + val, 1)
    .toString()
    .split('');
};
