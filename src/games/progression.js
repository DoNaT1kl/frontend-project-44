import { greeting, getRandomNum } from '../index.js';
import readlineSync from "readline-sync";

const makeProgression = (startNumber, step, maxLength) => {
    const progression = [];
    for (let i = 0; i < maxLength; i += 1) {
      progression.push(startNumber + i * step);
    }
    return progression;
};

const gameProgression = () => {
    const Username = greeting();
    console.log('What number is missing in the progression?');

    for (let i = 0; i < 3; i += 1) {
        const startNum = getRandomNum(1, 30);
        const stepNum = getRandomNum(1, 5);
        const lengthNum = getRandomNum(5, 10);
        const progression = makeProgression(startNum, stepNum, lengthNum);
        const popRandomIndex = getRandomNum(0, progression.length);
        
        const correctAnswer = progression[popRandomIndex];
        progression[popRandomIndex] = '..';
        const question = progression.join(' ');

        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');

        if (answer !== String(correctAnswer)) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${Username}!`);
            return;
        }

        console.log('Correct!');

        if ((i + 1) % 3 === 0) {
            console.log(`Congratulations, ${Username}!`);
          }
    }
};

export default gameProgression;