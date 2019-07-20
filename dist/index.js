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
const trainValidationTestSplit = (data, train, validation, seed = -1.1, indices = false) => {
    let arr = [...data];
    if (seed !== -1.1)
        RNG = new prando_1.default(seed);
    if (indices) {
        let i = 0;
        arr = arr.map(el => i++);
    }
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
