import Prando from 'prando';

let RNG = new Prando();

const shuffle = (a: any[]) => {
  for (let i: number = a.length - 1; i > 0; i--) {
    const j: number = Math.floor(RNG.next() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const trainValidationTestSplit = (
  data: any[],
  train: number,
  validation: number,
  seed: number = -1.1,
  indices = false
) => {
  let arr = [...data];

  if (seed !== -1.1) RNG = new Prando(seed);

  if (indices) {
    let i = 0;
    arr = arr.map(el => i++); //@todo Change this
  }

  // If train < 1, assume percentage (same thing for validation)
  if (train < 1) train = Math.ceil(train * arr.length);
  if (validation < 1) validation = Math.ceil(validation * arr.length);

  const shuffled = shuffle([...arr]);
  const testSet = shuffled.splice(0, arr.length - train - validation);
  const validationSet = shuffled.splice(0, shuffled.length - train);
  const trainSet = shuffled;

  return [trainSet, validationSet, testSet];
};

export default trainValidationTestSplit;
