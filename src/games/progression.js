import runEngine from '../index.js';
import getRandomNum from '../utils.js';

const rules = ('What number is missing in the progression?');

const makeProgression = (startNumber, step, maxLength) => {
  const progression = [];
  for (let i = 0; i < maxLength; i += 1) {
    progression.push(startNumber + i * step);
  }
  return progression;
};

const gameProgression = () => {
  const startNum = getRandomNum(1, 30);
  const stepNum = getRandomNum(1, 5);
  const lengthNum = getRandomNum(5, 10);
  const progression = makeProgression(startNum, stepNum, lengthNum);
  const popRandomIndex = getRandomNum(0, progression.length);
  const correctAnswer = String(progression[popRandomIndex]);
  progression[popRandomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => runEngine(rules, gameProgression);
