const { go } = require('./mlService');

// import * as tf from '@tensorflow/tfjs';
exports.calculate = async (weights) => {
  return await go(weights);
};
