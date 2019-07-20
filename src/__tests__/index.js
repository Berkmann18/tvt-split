const trainValidationTestSplit = require('../../dist/index');

describe('1 split number', () => {
  const arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  test('2 filled + 1 empty array', () => {
    const tvt = trainValidationTestSplit(arr, 0.8);
    expect(tvt.length).toBe(3);
    expect(tvt[1].length > 0).toBeTruthy();
    expect(tvt[2].length).toBe(0);
  });

  it('results in correct train array length', () => {
    expect(trainValidationTestSplit(arr, 0.8)[0].length).toBe(8);
  });

  it('results in correct validation array length', () => {
    expect(trainValidationTestSplit(arr, 0.8)[1].length).toBe(2);
  });

  it('results in correct test array length', () => {
    expect(trainValidationTestSplit(arr, 0.8)[2].length).toBe(0);
  });
});

describe('2 split numbers', () => {
  const arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  test('1 filled + 1 empty + 1 filled array', () => {
    const tvt = trainValidationTestSplit(arr, 0.8, 0);
    expect(tvt.length).toBe(3);
    expect(tvt[2].length > 0).toBeTruthy();
    expect(tvt[1].length).toBe(0);
  });

  it('results in correct train array length', () => {
    expect(trainValidationTestSplit(arr, 0.8, 0.1)[0].length).toBe(8);
  });

  it('results in correct validation array length', () => {
    expect(trainValidationTestSplit(arr, 0.8, 0.1)[1].length).toBe(1);
  });

  it('results in correct test array length', () => {
    expect(trainValidationTestSplit(arr, 0.8, 0.1)[2].length).toBe(1);
  });
});

test('Consistent seed', () => {
  const arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  expect(trainValidationTestSplit(arr, 0.8, 0.1, 123)[0][0]).toBe(
    trainValidationTestSplit(arr, 0.8, 0.1, 123)[0][0]
  );
});

test('Indices', () => {
  const arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  expect(typeof trainValidationTestSplit(arr, 0.8, 0.1, 123, true)[0][0]).toBe('number');
});
