import { greeting, getRandomNum } from '../index.js';
import readlineSync from "readline-sync";

const getGcd = (num1, num2) => (num2 === 0 ? num1 : getGcd(num2, num1 % num2));

const gameGcd = () => {
    const Username = greeting();
    console.log('Find the greatest common divisor of given numbers.');

    for (let i = 0; i < 3; i += 1) {
        const firstNum = getRandomNum(1, 20);
        const secondNum = getRandomNum(1, 20);
        console.log(`Question: ${firstNum} ${secondNum}`);
        const answer = readlineSync.question('Your answer: ')
        const correctAnswer = getGcd(firstNum, secondNum);

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

export default gameGcd;