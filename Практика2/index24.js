let sum = 0;

// Сумма чисел от 1 до 100, кратных 4
for (let i = 1; i <= 100; i++) {
    if (i % 4 === 0) {
        sum += i;
    }
}

console.log(sum); // Вывод суммы
