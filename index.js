
// class NeuralNetwork{
//     constructor(inputCount, outputCount){
//         this.inputs = new Array(inputCount)
//         this.outputs = new Array(outputCount)
//         this.biases = new Array(outputCount)

//         this.weights = [];
//         for(let i = 0; i < inputCount; i++){
//             this.weights[i] = new Array(outputCount);
//         }

//         console.log(this.inputs);
//         console.log(this.outputs);
//         console.log(this.biases);
//         console.log(this.weights);
//     }
// }

// const neuron = new NeuralNetwork(5, 5)


// // Samajh Agaya hai

// const inputs = [2, 3];
// const hiddenWeights = [
//     [0.5, -1],
//     [1, 0.5]
// ];

// const hiddenBiases = [1, -0.5];
// const hiddenOutputs = []

// function relu(x) {
//     return Math.max(0, x)
// }

// function sigmoid(x){
//     return 1 / ( 1 + Math.exp(-x) )
// }

// function neuron(inputs, weights, bias) {
//     let sum = bias;

//     for(let i = 0; i < inputs.length; i++){
//         sum += inputs[i] * weights[i]
//     }
//     return relu(sum);
// }


// for(let i = 0; i < hiddenWeights.length; i++){
//     const result = neuron(inputs, hiddenWeights[i],hiddenBiases[i])
//     hiddenOutputs.push(result)
// }



// const outputWeights = [0.4, 0.8]
// const outputBias = -1

// const finalSum =
//     hiddenOutputs[0] * outputWeights[0] +
//     hiddenOutputs[1] * outputWeights[1] +
//     outputBias;

// const prediction = sigmoid(finalSum)

// console.log("Hidden outputs:", hiddenOutputs);
// console.log("Final prediction:", prediction);

// // Samajh Agaya hai



// class ForwardPropagation {
//     constructor(inputs, hiddenWeights, hiddenBiases) {
//         this.inputs = inputs
//         this.hiddenWeights = hiddenWeights
//         this.hiddenBiases = hiddenBiases
//         this.outputWeights = [0.4, 0.8]
//         this.outputbias = -1
//     }
//     relu(x) {
//         return Math.max(0, x)
//     }
//     sigmoid(x) {
//         return 1 / (1 + Math.exp(-x))
//     }
//     predict() {
//         // let sum = 0
//         const hiddenOutputs = []
//         for (let i = 0; i < this.hiddenWeights.length; i++) {
//             let sum = this.hiddenBiases[i]
//             for (let j = 0; j < this.inputs.length; j++) {
//                 sum += this.inputs[j] * this.hiddenWeights[i][j] 
//             }
//             const result = this.relu(sum)
//             hiddenOutputs.push(result)
//         }
//         let outputRes = this.outputbias
//         for (let i = 0; i < hiddenOutputs.length; i++) {
//             outputRes += (hiddenOutputs[i] * this.outputWeights[i])
//         }
//         return this.sigmoid(outputRes)
//     }
// }

// const inputs = [2, 3];
// const hiddenWeights = [
//     [0.5, -1],
//     [1, 0.5]
// ];

// const hiddenBiases = [1, -0.5];

// const fp = new ForwardPropagation(inputs, hiddenWeights, hiddenBiases)
// console.log(fp.predict());



// function calculateMSE(actual, predict){
//     let totalLoss = 0
//     for(let i = 0; i < actual.length; i++){
//         const error = actual[i] - predict[i]
//         totalLoss += error ** 2
//     }
//     return totalLoss / actual.length
// }

// const actual = [100, 200, 300];
// const predicted = [90, 180, 310];

// const loss = calculateMSE(actual, predicted);

// console.log(loss); // 200

// function binaryCrossEntropy(actual, predicted){
//     return -(actual * Math.log(predicted) + (1 - actual) * Math.log(1 - predicted))
// }

// console.log(binaryCrossEntropy(1, 0.9));
// console.log(binaryCrossEntropy(0, 0.9));

// let weight = 1;
// let bias = 0

// const x = 2
// const actual = 10
// const learningRate = 0.01;
// const epoch = 100

// for(let i = 0; i < epoch; i++){
//     const prediction = weight * x + bias

//     const error = prediction - actual
//     const loss = error ** 2;

//     const weightedGradient = 2 * error * x;
//     const biasGradient = 2 * error

//     weight -= learningRate * weightedGradient
//     bias -= learningRate * biasGradient

//     if(i % 10 === 0){
//         console.log(`Step ${i}: Loss = ${loss.toFixed(4)}`);
//     }
// }

// const finalPrediction = weight * x + bias
// console.log("Final weight:", weight);
// console.log("Final bias:", bias);
// console.log("Final prediction:", finalPrediction);


// let x = 2;
// let w1 = 3
// let w2 = 1
// let actual = 10;
// let learningRate = 0.01;

// const hiddenOutput = x * w1
// const prediction = hiddenOutput * w2
// const error = prediction - actual
// const loss = error ** 2

// // backpropagation
// const outputGradient = 2 * error
// const w2Gradient = outputGradient * hiddenOutput
// const w1Gradient = outputGradient * w2 * x

// // Gradient Descent
// w2 -= learningRate * w2Gradient
// w1 -= learningRate * w1Gradient

// const newHiddenOutput = x * w1
// const newPrediction = newHiddenOutput * w2
// const newError = newPrediction - actual
// const newLoss = newError ** 2

// console.log("New Prediction: ", newPrediction);
// console.log("New Error: ", newError);
// console.log("New Loss ", newLoss);


// let inputs = [1, 2]
let dataset = [
    { inputs: [1, 2], actual: [2, 4] },
    { inputs: [2, 3], actual: [4, 6] },
    { inputs: [3, 4], actual: [6, 8] },
    { inputs: [4, 5], actual: [8, 10] },
    { inputs: [5, 10], actual: [10, 20] }, // Added to training set
    { inputs: [6, 7], actual: [12, 14] }, // Added to training set
    { inputs: [0.5, 1], actual: [1, 2] }
];
let hiddenWeights = [[0.3, 0.5], [-1, 0.4]]
let hiddenBias = [0.6, 0.2]
let outputWeights = [0.3, 0.5]
let outPutBias = [-1, -1];
let learningRate = 0.3;
// let actual = [2, 4]
const MAX_VAL = 100;


function reLU(x) {
    return Math.max(0, x);
}

function dReLU(x) {
    return x > 0 ? 1 : 0;
}

function leakyReLU(x, alpha = 0.01) {
    return x > 0 ? x : alpha * x;
}

function dLeakyReLU(x, alpha = 0.01) {
    return x > 0 ? 1 : alpha;
}

function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

function dSigmoid(output) {
    return output * (1 - output);
}

function forwardPropagation(inputs) {
    let hiddenOutput = []
    let prediction = []

    // Normalize inputs to range [0, 1]
    let normInputs = inputs.map(val => val / MAX_VAL);

    for (let i = 0; i < hiddenWeights.length; i++) {
        let sum = hiddenBias[i]
        for (let j = 0; j < inputs.length; j++) {
            sum += normInputs[j] * hiddenWeights[j][i];
        }

        hiddenOutput.push(sum)
        // hiddenOutput.push(leakyReLU(sum))
    }

    for (let i = 0; i < outputWeights.length; i++) {
        let sum = hiddenOutput[i] * outputWeights[i] + outPutBias[i]
        prediction.push(sum)
        // prediction.push(sigmoid(sum))
    }
    // console.log(prediction, "Prediction");
    // Denormalize predictions back to original scale
    let denormPrediction = prediction.map(val => val * MAX_VAL);
    return { hiddenOutput, prediction, denormPrediction, normInputs };
}



function lossAndBackPropagation() {
    for (let epoch = 1; epoch <= 30000; epoch++) {
        for (let data of dataset) {
            const { inputs, actual } = data
            // Normalize actual targets as well
            let normActual = actual.map(val => val / MAX_VAL);
            let { hiddenOutput, prediction, normInputs } = forwardPropagation(inputs);
            for (let i = 0; i < prediction.length; i++) {
                const error = prediction[i] - normActual[i];
                const loss = error ** 2
                // console.log(`Error: ${error}, Loss: ${loss}`);
                // Calculate Gradient
                let outputDerivative = dSigmoid(prediction[i])
                let mainOutputWeights = [...outputWeights]
                let outputGradient = 2 * error
                // let outputGradient = 2 * error * outputDerivative
                let outPutWeightGradient = outputGradient * hiddenOutput[i]
                let outputbiasGradient = outputGradient
                outputWeights[i] -= learningRate * outPutWeightGradient
                outPutBias[i] -= learningRate * outputbiasGradient

                let hiddenDerivative = dLeakyReLU(hiddenOutput[i])
                let hiddenGradient = outputGradient * mainOutputWeights[i]
                // let hiddenGradient = outputGradient * mainOutputWeights[i] * hiddenDerivative
                let hiddenBiasGradient = hiddenGradient
                for (let j = 0; j < hiddenWeights.length; j++) {
                    let hiddenWeightsGradient = hiddenGradient * normInputs[j]
                    hiddenWeights[j][i] -= learningRate * hiddenWeightsGradient
                }
                hiddenBias[i] -= learningRate * hiddenBiasGradient

            }
            // if (epoch % 1000 === 0) {
            //     console.log(`Epoch: ${epoch}`);
            //     console.log("Predicted: ", prediction);
            // }
        }
    }
    // const { inputs, actual } = data
    // let { prediction } = forwardPropagation(inputs);
    // console.log("Predicted: ", prediction);

    // let { prediction: test } = forwardPropagation([3, 4]); // should ans 2 * 3 and 2 * 4
    // console.log("Test: ", test);

    // Test dataset containing inputs the model has never seen before
    let unseenTestDataset = [
        { inputs: [100, 9], expected: [200, 18] },
        { inputs: [12, 15], expected: [24, 30] },
        { inputs: [0.2, 0.8], expected: [0.4, 1.6] },
        { inputs: [20, 25], expected: [40, 50] }
    ];

    console.log("=== Ultimate Model Evaluation on Unseen Data ===");
    for (let test of unseenTestDataset) {
        let { denormPrediction } = forwardPropagation(test.inputs);
        let formattedPred = denormPrediction.map(val => val.toFixed(4)).join(", ");
        let formattedExp = test.expected.join(", ");

        console.log(`Input: [${test.inputs}] | Predicted: [${formattedPred}] | Expected: [${formattedExp}]`);
    }
}

lossAndBackPropagation()

// Helpers replacing p5.js functions
const random = (min, max) => Math.random() * (max - min) + min;
const constrain = (value, low, high) => Math.min(Math.max(value, low), high);
const sqrt = Math.sqrt;

// Placeholder values: replace with your real ones
const canvasWidth = 800;
const ball = { startX: 50 };
const friction = 0.1;
const gravity = 0.5;

const network = {
    dataset: []
};

function generateDatasetSamples(numSamples = 3) {
    network.dataset = [];
    for (let i = 0; i < numSamples; i++) {
        let simulatedTargetX = random(200, canvasWidth - 60);
        let distanceX = simulatedTargetX - ball.startX;

        let normDist = constrain(distanceX / canvasWidth, 0, 1);
        let normFriction = friction / 0.2;

        let idealForce = constrain(sqrt(distanceX * gravity * 1.8), 2, 28);
        let idealAngle = 45;

        let targetAngleNorm = (idealAngle - 5) / 80;
        let targetForceNorm = (idealForce - 2) / 26;

        network.dataset.push({
            input: [normDist, normFriction],
            actual: [targetAngleNorm, targetForceNorm]
        });
    }
}

generateDatasetSamples(3);
console.log("Generated Dataset Samples:", network.dataset);