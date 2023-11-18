const Calculator = require('../libraries/Calculator.js');
const myCalc = new Calculator();

const addNum = (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const sum = myCalc.add(num1, num2);

    console.log(sum);
    res.status(200).json({ result: sum });
};

const subtractNum = (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const difference = myCalc.subtract(num1, num2);

    console.log(difference);
    res.status(200).json({ result: difference });
};

const multiplyNum = (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const product = myCalc.multiply(num1, num2);

    console.log(product);
    res.status(200).json({ result: product });
};

const divideNum = (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const quotient = myCalc.divide(num1, num2);

    console.log(quotient);
    res.status(200).json({ result: quotient });
};

module.exports = {
    addNum,
    subtractNum,
    multiplyNum,
    divideNum,
};
