export const add = (str) => {
  if (str === '') return 0;

  const modifiedString = str
    .split(';')
    .join(',')
    .split('\n')
    .join(',')
    .split('//')
    .join(',');

  const stringArray = modifiedString.split(',').map(Number);
  const filterNumbersOnly = stringArray.filter((el) => el === Number(el));
  const filterNegativeNumbers = filterNumbersOnly.filter((num) => num < 0);

  if (filterNegativeNumbers.length) {
    throw new Error(
      `negative numbers not allowed ${filterNegativeNumbers.join(',')}`
    );
  }

  const result = filterNumbersOnly.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return result;
};
