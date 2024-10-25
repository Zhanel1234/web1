const number = 5;

// Таблица умножения с помощью for
console.log("Таблица умножения с использованием for:");
for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}

// Таблица умножения с помощью while
console.log("Таблица умножения с использованием while:");
let j = 1;
while (j <= 10) {
    console.log(`${number} * ${j} = ${number * j}`);
    j++;
}

// Таблица умножения с помощью do while
console.log("Таблица умножения с использованием do while:");
let k = 1;
do {
    console.log(`${number} * ${k} = ${number * k}`);
    k++;
} while (k <= 10);
