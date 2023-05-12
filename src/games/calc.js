import { greeting, getRandomNum } from '../index.js';
import readlineSync from "readline-sync";

const getOperstor = () => {
    const operators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * (operators.length));
    const operator = operators[randomIndex];
    return operator;
};

const calc = () => {
    const firstNum = getRandomNum(1, 20);
    const secondNum = getRandomNum(1, 20);
    const operator = getOperstor();
        console.log(`Question: ${firstNum} ${operator} ${secondNum}`);
        let correctAnswer = '';

        if (operator === '+') {
            correctAnswer = firstNum + secondNum;
        } else if (operator === '-') {
            correctAnswer = firstNum - secondNum;
        } else {
            correctAnswer = firstNum * secondNum;
        }
        return correctAnswer
};

const calcGame = () => {
    const Username = greeting();
    console.log('What is the result of the expression?');

    for (let i = 0; i < 3; i += 1) {
        const correctAnswer = calc();
        const answer = readlineSync.question('Your answer: ')

        if (answer == correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${Username}!`)
            return;
        }

        if ((i + 1) % 3 === 0) {
            console.log(`Congratulations, ${Username}!`);
          }
    }
};

export default calcGame;