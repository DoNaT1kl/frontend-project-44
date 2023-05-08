import { greeting, getRandomNum } from '../index.js';
import readlineSync from "readline-sync";

const isEvenNum = () => {

//Приветствие
    const Username = greeting();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

//Проверка на четное число
    const isEven = (num) => num % 2 === 0;
    
//Проверка случайного целого числа на четность
    for (let i = 0; i < 3; i += 1) {

        const randomInt = getRandomNum(1, 100);
//Вопрос
        console.log(`Question: ${randomInt} `)
        const answer = readlineSync.question('Your answer: ');
        const evenNum = isEven(randomInt);
    
        if (answer === 'yes' && evenNum === true) {
            console.log('Correct!');
        } else if (answer === 'no' && evenNum === false) {
            console.log('Correct!');
        } else if (answer === 'yes' && evenNum === false) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
            console.log(`Let's try again, ${Username}!`);
            break;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
            console.log(`Let's try again, ${Username}!`);
            break;
        }

        if ((i + 1) % 3 === 0) {
            console.log(`Congratulations, ${Username}!`);
          }
    }
};

export default isEvenNum;