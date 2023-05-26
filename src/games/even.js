import runEngine from '../index.js';
import getRandomNum from '../utils.js';

const rules = ('Answer "yes" if the number is even, otherwise answer "no".');
const isEven = (num) => num % 2 === 0;

const isEvenNum = () => {
  const randomInt = getRandomNum(1, 100);
  const correctAnswer = isEven(randomInt) ? 'yes' : 'no';
  const question = (`Question: ${randomInt}`);
  return [question, correctAnswer];
};

export default () => runEngine(rules, isEvenNum);
