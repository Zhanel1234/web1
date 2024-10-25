// Создаем объект на основе класса Date
var today = new Date();
// Получаем нынешний день
var day = today.getDate();
// Получаем нынешний месяц (добавляем +1, так как отсчет с нуля)
var month = today.getMonth() + 1;
// Получаем нынешний год
var year = today.getFullYear();

// Если день менее 10, то добавляем 0 перед числом
if (day < 10) {
    day = '0' + day;
}

// Создаем переменную в формате: m-dd-yyyy
today = month + '-' + day + '-' + year;

// Выводим дату
console.log(today);
