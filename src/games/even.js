import readlineSync from 'readline-sync';
import getRandomNum from '../utils.js';
import greeting from '../index.js';

const isEven = (num) => num % 2 === 0;

const Username = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEvenNum = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomInt = getRandomNum(1, 100);
    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ');
    const evenNum = isEven(randomInt) ? 'yes' : 'no';

    if (answer !== evenNum) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${evenNum}'.\nLet's try again, ${Username}!`);
      return;
    }

    console.log('Correct!');

    if ((i + 1) % 3 === 0) {
      console.log(`Congratulations, ${Username}!`);
    }
  }
};

export default isEvenNum;
