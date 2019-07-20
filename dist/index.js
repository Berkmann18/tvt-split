"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prando_1 = require("prando");
let RNG = new prando_1.default();
const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(RNG.next() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};
/**
 * Split data into a training, validation and test set.
 * @param {Array} data Data
 * @param {number} train Size of the training set (in percentage if `train < 1`)
 * @param {number} validation Size of the validation set (in percentage if `train < 1`)
 * @param {number} [seed=-1.1] Seed of the Pseudo-Random Number Generation.
 * @param {boolean} [indices=false] Indicates whether to return the indices of the provided array or the actual values
 * @returns {[Array, Array, Array]} Split data
 */
const trainValidationTestSplit = (data, train, validation, seed = -1.1, indices = false) => {
    let arr = [...data];
    if (seed !== -1.1)
        RNG = new prando_1.default(seed);
    if (indices) {
        //eslint-disable-next-line @typescript-eslint/no-unused-vars
        arr = arr.map((el, i) => i);
    }
    // If train < 1, assume percentage (same thing for validation)
    if (train < 1)
        train = Math.ceil(train * arr.length);
    if (validation < 1)
        validation = Math.ceil(validation * arr.length);
    const shuffled = shuffle([...arr]);
    const testSet = shuffled.splice(0, arr.length - train - validation);
    const validationSet = shuffled.splice(0, shuffled.length - train);
    const trainSet = shuffled;
    return [trainSet, validationSet, testSet];
};
exports.default = trainValidationTestSplit;
