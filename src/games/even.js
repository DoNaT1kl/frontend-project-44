import { greeting, getRandomNum } from '../index.js';
import readlineSync from "readline-sync";

const isEven = (num) => num % 2 === 0;

const Username = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEvenNum = () => {

    for (let i = 0; i < 3; i += 1) {

        const randomInt = getRandomNum(1, 100);
        console.log(`Question: ${randomInt}`);
        const answer = readlineSync.question('Your answer: ');
        const evenNum = isEven(randomInt);

        if (answer === 'yes' && evenNum === false) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${Username}!`);
            return;
        } else if (answer === 'no' && evenNum === true) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${Username}!`);
            return;
        }

         console.log('Correct!');

        if ((i + 1) % 3 === 0) {
            console.log(`Congratulations, ${Username}!`);
          }
    }
};

export default isEvenNum;