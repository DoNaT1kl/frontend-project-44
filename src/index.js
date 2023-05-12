import readlineSync from "readline-sync";

//Приветствие 
const greeting = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
};

//Генерация случайного целого числа
const getRandomNum = (min, max) => Math.floor(Math.random() * max) + min;

export { greeting, getRandomNum };