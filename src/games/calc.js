import { greeting, getRandomNum } from '../index.js';
import readlineSync from "readline-sync";

const calc = () => {

//Приветствие
    const Username = greeting();
    console.log('What is the result of the expression?');

//Калькулятор
    for (let i = 0; i < 3; i += 1) {
        const operators = ['+', '-', '*'];
        const firstNum = getRandomNum(1, 20);
        const secondNum = getRandomNum(1, 20);
        const randomIndex = Math.floor(Math.random() * (operators.length));
        const operator = operators[randomIndex];
//Вопрос
        const question = (`Question: ${firstNum} ${operator} ${secondNum}`);
        console.log(question);
        const answer = readlineSync.question('Your answer: ')
        let correctAnswer = '';

        if (operator === '+') {
            correctAnswer = firstNum + secondNum;
        } else if (operator === '-') {
            correctAnswer = firstNum - secondNum;
        } else {
            correctAnswer = firstNum * secondNum;
        }

        if (answer == correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
            console.log(`Let's try again, ${Username}!`);
            break;
        }

        if ((i + 1) % 3 === 0) {
            console.log(`Congratulations, ${Username}!`);
          }
    }
};

export default calc;