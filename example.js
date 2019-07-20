const trainTestSplit = require('./dist/index').default;

const arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const [train, valid, test] = trainTestSplit(arr, 0.8, 0.1, 1234, true);
console.log(train, valid, test);
