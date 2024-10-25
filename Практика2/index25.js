const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите произвольное число: ', (input) => {
    const number = parseInt(input);
    let divisors = [];

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }

    console.log(`Делители числа ${number}: ${divisors.join(', ')}`);
    rl.close();
});
