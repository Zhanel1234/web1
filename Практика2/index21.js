const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите число: ', (input) => {
    const n = parseFloat(input);
    const result = n + n * 2;
    console.log(`Получаем: ${result}`);
    rl.close();
});
