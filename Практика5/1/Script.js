"use strict";

let tC = 0;
let tF = 0;

tC = Number(prompt("Введите температуру в градусах по Цельсию: "));
tF = (9/5)*tC + 32;
alert("Температура в градусах по Фаренгейтку: " + String(tF));
