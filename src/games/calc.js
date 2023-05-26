import runEngine from '../index.js';
import getRandomNum from '../utils.js';

const rules = 'What is the result of the expression?';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * (operators.length));
  const operator = operators[randomIndex];
  return operator;
};

const calc = () => {
  const firstNum = getRandomNum(1, 20);
  const secondNum = getRandomNum(1, 20);
  const operator = getOperator();
  const question = `${firstNum} ${operator} ${secondNum}`;
  let correctAnswer = [];
  if (operator === '+') {
    correctAnswer = firstNum + secondNum;
  } else if (operator === '-') {
    correctAnswer = firstNum - secondNum;
  } else {
    correctAnswer = firstNum * secondNum;
  }
  correctAnswer = String(correctAnswer);
  return [question, correctAnswer];
};

export default () => runEngine(rules, calc);
