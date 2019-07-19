import seedrandom from 'seedrandom';

//@todo make use of validationSet
//@todo refactor
//@todo fix errors
//@todo test
//@todo publish

const trainValidationTestSplit = (() => {
  const shuffle = (a: any[]) => {
    for (let i: number = a.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  return (data, train, validation, seed = null, indices = false) => {
    let arr = [...data];

    if (seed !== null) Math.seedrandom(seed);

    if (indices) {
      let i = 0;
      arr = arr.map(el => i++);
    }

    // If train < 1, assume percentage
    if (train < 1) train = (train * arr.length) | 1;

    const shuffled = shuffle([...arr]);
    const testSet = shuffled.splice(0, arr.length - train);
    const validationSet = shuffled.splice(0, arr.length - train - validation);
    const trainSet = shuffled;

    return [trainSet, validationSet, testSet];
  };
})();

export default trainValidationTestSplit;
