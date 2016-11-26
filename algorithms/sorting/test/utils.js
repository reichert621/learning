const generateRandomNumber = () =>
  Math.floor((Math.random() - Math.random()) * 100);

const generateRandomArray = () =>
  Array.from({ length: 100 })
    .map(generateRandomNumber);

const generateTestData = () =>
  Array.from({ length: 10 })
    .map(generateRandomArray);

const sortWithoutMutation = (arr) =>
  arr.slice()
    .sort((x, y) => x - y);

module.exports = {
  generateRandomNumber,
  generateRandomArray,
  generateTestData,
  sortWithoutMutation
};
