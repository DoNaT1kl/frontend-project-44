import runEngine from '../index.js';
import getRandomNum from '../utils.js';

const rules = ('Find the greatest common divisor of given numbers.');
const getGcd = (num1, num2) => (num2 === 0 ? num1 : getGcd(num2, num1 % num2));

const gameGcd = () => {
  const firstNum = getRandomNum(1, 20);
  const secondNum = getRandomNum(1, 20);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(getGcd(firstNum, secondNum));
  return [question, correctAnswer];
};

export default () => runEngine (rules, gameGcd);
