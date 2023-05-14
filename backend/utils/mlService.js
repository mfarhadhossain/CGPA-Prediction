const tf = require('@tensorflow/tfjs');
exports.go = async (weights) => {
  console.log(`printing weights: ` + weights);
  const annModel = await tf.loadLayersModel(
    'https://raw.githubusercontent.com/Frdhsn/cgpa-prediction-model-load/main/modelanntfjsv3/model.json'
  );
  const cnnModel = await tf.loadLayersModel(
    'https://raw.githubusercontent.com/Frdhsn/cgpa-prediction-model-load/main/modelCnn0tfjsv3/model.json'
  );
  const annModel2 = await tf.loadLayersModel(
    'https://raw.githubusercontent.com/Frdhsn/cgpa-prediction-model-load/main/modelann0tfjsv3/model.json'
  );
  annModel.summary();

  //var data = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6]];
  const resultTensor = annModel.predict(tf.tensor2d([weights]));
  const predictedValue = resultTensor.arraySync()[0][0];
  //   const ret = mymodel.predict(tf.tensor2d([weights])).print();
  console.log(predictedValue);
  return predictedValue * 2.0 + 2.0;
};
//go();
