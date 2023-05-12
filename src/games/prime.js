import { greeting, getRandomNum, is } from '../index.js';
import readlineSync from "readline-sync";

const Username = greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
        if (num % i === 0) return false;
      }
      return num !== 1;
    }

const primeGame = () => {

    for (let i = 0; i < 3; i += 1) {

        const answer = readlineSync.question('Your answer: ');
        const randomNum = getRandomNum(1, 50);
        console.log(`Question: ${randomNum}`);
        const primeNum = isPrime(randomNum) ? 'yes' : 'no';

        if (answer !== primeNum) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${primeNum}'.\nLet's try again, ${Username}!`);
            return;
        }
        console.log('Correct!')

        if ((i + 1) % 3 === 0) {
            console.log(`Congratulations, ${Username}!`);
          }
    }
};

export default primeGame;