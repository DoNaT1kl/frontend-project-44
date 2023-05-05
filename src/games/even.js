import readlineSync from "readline-sync";

const isEvenNum = () => {
//Приветствие
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

//Генерация случайного целого числа
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * max) + min;
    };

//Проверка на четное число
    const isEven = (num) => num % 2 === 0;
    
//Проверка случайного целого числа на четность
    for (let i = 0; i < 3; i += 1) {

        const randomInt = getRandomInt(1, 100);
        const answer = readlineSync.question(`Question: ${randomInt} `);
        const evenNum = isEven(randomInt);
    
        if (answer === 'yes' && evenNum === true) {
            console.log('Your answer: yes');
            console.log('Correct!');
        } else if (answer === 'no' && evenNum === false) {
            console.log('Your answer: no');
            console.log('Correct!');
        } else if (answer === 'yes' && evenNum === false) {
            console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
            console.log(`Let's try again, ${name}!`);
            break;
        } else {
            console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
            console.log(`Let's try again, ${name}!`);
            break;
        }

        if ((i + 1) % 3 === 0) {
            console.log(`Congratulations, ${name}!`);
          }
    }
};

export default isEvenNum;