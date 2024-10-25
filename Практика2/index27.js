// Функция для вывода первого и второго элемента массива
function printFirstTwoElements(arr) {
    if (arr.length >= 2) {
        console.log(arr[0], arr[1]);
    } else {
        console.log("Массив должен содержать как минимум два элемента.");
    }
}

// Пример выполнения функции
const exampleArray = [15, 10, 15, 20, 25];
printFirstTwoElements(exampleArray);
