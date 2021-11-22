/*
    Задание 1:
    Вам необходимо поделиться информацией о вашем родном городе. Все данные необходимо записать в отдельную переменную.
    Информация о городе:
    - Название города (строка)
    - В какой стране находится этот город (строка)
    - Численность населения (число)
    - Есть ли футбольный стадион (boolean [ true(да) / false(нет) ])
*/
console.log("Задание 1");
console.log("Информация о городе: ");
let nameTown = "Riga";
console.log(nameTown);
console.log("В какой стране находится этот город: ");
let nameCountry = "Latvia";
console.log(nameCountry);
console.log("Численность населения: ");
let numberPopulation = 1.2
console.log(numberPopulation +'milj');
console.log("Есть ли футбольный стадион?");
let answer1 = true;
let answer2 = false;
console.log(answer1);
/*
    Задание 2:
    Напишите скрипт, который находит площадь прямоугольника
    - высота 40см
    - ширина 70см
    ps: каждая сущность должна находиться в отдельной переменной
*/
console.log("Задание 2");
const height=40;
const width=70;
let result=height*width;
console.log("площадь прямоугольника: " + result);
/*
    Задание 3:
    Два автомобиля одновременно выехали навстречу друг другу из двух городов и встретились через 2 часа.
    Первый ехал со скоростью 95км/ч, а второй 114км/ч.
    Цель: Выяснить на каком расстоянии находятся города друг от друга и после всех вычеслений записать результат в переменную.
    Исходные данные:
    time = 2;
    speedOfFirst = 95;
    speedOfSecond = 114;
*/
console.log("Задание 3");
let time=2;
let speedOfFirst=95;
let speedOfSecond=114;
let distanceFirstCar=time*speedOfFirst;
let distanceSecondCar=time*speedOfSecond;
let distanceBetweenCities=distanceFirstCar+distanceSecondCar;
console.log("расстояние между городами: " + distanceBetweenCities + "km");
/*
    Задание 4:
    Перед вами код:
    const randomNumber = Math.floor(Math.random() * 100);
    Этот код при каждом обновлении страницы генерирует случайное число и записывает его в переменную randomNumber.
    Напишите условную конструкцию, со следующими данными:
    - если randomNumber меньше 20, то выведите в консоль сообщение : "randomNumber меньше 20"
    - если randomNumber больше 50, то выведите в консоль сообщение : "randomNumber больше 50"
    - если ни один из вариантов не совпал, то выведите в консоль сообщение : "randomNumber больше 20, и меньше 50"
*/
console.log("Задание 4");
const randomNumber = Math.floor(Math.random() * 100);
if (randomNumber<20){
console.log("randomNumber меньше 20");
} else if (randomNumber > 50){
console.log("randomNumber больше 50");
} else {
console.log("randomNumber больше 20, и меньше 50");
}
/*
    Задание 5:
    Условную конструкцию из задания 4, перепишите с помощью Switch Case
*/
console.log(true);
switch(randomNumber)
{
    case randomNumber < 20 :
        console.log("randomNumber меньше 20");
        break;
    case randomNumber >50 :
        console.log("randomNumber больше 50");
        break;
    default :
        console.log("randomNumber больше 20, и меньше 50");
}
