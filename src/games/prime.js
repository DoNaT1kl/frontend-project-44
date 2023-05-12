import { greeting, getRandomNum } from '../index.js';
import readlineSync from "readline-sync";

const Username = greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const primeGame = () => {

    const isPrime = (num) => {
        for (let i = 2; i < num; i += 1) {
            if (num % i === 0) return false;
          }
          return num !== 1;
        }
        
    for (let i = 0; i < 3; i += 1) {

        const randomInt = getRandomNum(1, 100);
        console.log(`Question: ${randomInt}`);
        const answer = readlineSync.question('Your answer: ');
        const primeNum = isPrime(randomInt);

        if (answer === 'yes' && primeNum === false) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${Username}!`);
            return;
        } else if (answer === 'no' && primeNum === true) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${Username}!`);
            return;
        }

        console.log('Correct!');

        if ((i + 1) % 3 === 0) {
            console.log(`Congratulations, ${Username}!`);
          }
    }
};

export default primeGame;