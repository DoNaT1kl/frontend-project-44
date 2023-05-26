import runEngine from '../index.js';
import getRandomNum from '../utils.js';

const rules = ('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const primeGame = () => {
    const randomNum = getRandomNum(1, 50);
    const question = (`Question: ${randomNum}`);
    const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
    return [question, correctAnswer]
};

export default () => runEngine (rules, primeGame);
