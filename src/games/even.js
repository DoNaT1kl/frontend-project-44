import { greeting, getRandomNum } from '../index.js';
import readlineSync from "readline-sync";

const isEvenNum = () => {

    const Username = greeting();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const isEven = (num) => num % 2 === 0;
    
    for (let i = 0; i < 3; i += 1) {

        const randomInt = getRandomNum(1, 100);
        console.log(`Question: ${randomInt} `)
        const answer = readlineSync.question('Your answer: ');
        const evenNum = isEven(randomInt);
    
        if (answer === 'yes' && evenNum === true) {
            console.log('Correct!');
        } else if (answer === 'no' && evenNum === false) {
            console.log('Correct!');
        } else if (answer === 'yes' && evenNum === false) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${Username}!`);
            return;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${Username}!`);
            return;
        }

        if ((i + 1) % 3 === 0) {
            console.log(`Congratulations, ${Username}!`);
          }
    }
};

export default isEvenNum;