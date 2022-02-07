

//не решены  - 8,11; не работает - 9;
// 8 - проверка телефона
// 9 - проверка email
// 11 - массивы

//Задание 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.

console.log('                       Задача 1');

let str = 'aaa@bbb@ccc';

console.log(str.replace(/@/g, '!')); 

//Задание 2/ В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025.

console.log('                       Задача 2');

let date = new Date('2025-12-31');
console.log(date.toLocaleString('en-GB')); 


//Задание 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice).

console.log('                       Задача 3');

let str3 = 'Я учу javascript!';

console.log('       SUBSTRING');
console.log(str3.substring(2,5)); 
console.log(str3.substring(6,16)); 

console.log('       SUBSTR');
console.log(str3.substr(2,3)); 
console.log(str3.substr(6,10)); 

console.log('       SLICE');
console.log(str3.slice(2,5)); 
console.log(str3.slice(6,16)); 

//Задание 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

console.log('                       Задача 4');

let arr4 = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;

for (let i = 0; i<arr4.length; i++) {
    sum = +Math.pow(arr4[i],3) + sum;
}
let result = (Math.sqrt(sum));

console.log(result);


//Задание 5. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.

console.log('                       Задача 5');

function DifferenceModuleAB(a, b) {
    return c = Math.abs(a - b);
}

console.log(DifferenceModuleAB(3,5));
console.log(DifferenceModuleAB(6,1));

// function DifferenceAB(a, b) {
//     if (a > b) return c = a - b;
//     else return c = b - a;
// }

// console.log(DifferenceAB(2,5));
// console.log(DifferenceAB(7,1));


//Задание 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).

console.log('                       Задача 6');

// let date6 = new Date();
// console.log(date6.toLocaleString('ru')); 

let date6 = new Date();
function addNull(x){
	if (x > 0 && x < 10) { 
		return '0' + x;
	} else {
		return x;
	}
}

console.log(date6.getHours() + ':' + date6.getMinutes() + ':' + date6.getSeconds() + ' ' + addNull(date6.getDate()) + '.' + addNull(date6.getMonth() + 1) + '.' + date6.getFullYear());

//Задание 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'. 

console.log('                       Задача 7');

let str7='aa aba abba abbba abca abea';
let reg7=/ab{1,}a/gi; 
console.log(str7.match(reg7));

//Задание 8. Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код страны> <код города или сети> <номер телефона>). Функция должна возвращать true или false. Используйте регулярные выражения.

console.log('                       Задача 8');



//Задание 9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих условия:
// - весь адрес не должен содержать русские буквы и спецсимволы, кроме одной «собачки», знака подчеркивания, дефиса и точки;
// - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, 

//но не быть первыми и единственными в имени; 


// - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов.

// Функция должна возвращать true или false. Используйте регулярные выражения.

console.log('                       Задача 9');

let regexp = /[0-9a-z]{2-40}@[a-z].[a-z]{2-11}/gi;    ////???

let email = 'marta@mail.ru';
console.log(regexp.test(email));



//Задание 10. Вам дана Grid таблица состоящая из массивов, в которых лежат буквы, а также массив с картой чисел, который поможет составить слово из этой Grid таблицы, например: 
/*
    ```
    Grid таблица: 
   
    [
        ['m', 'y', 'e'], 
        ['x', 'a', 'm'], 
        ['p', 'l', 'e']
    ]
    
    карта чисел: 
    
    [1, 3, 5, 8]
    
   ```
   Создайте единый массив из Grid таблицы (можно при помощи метода .flat()) и по нему составьте слово пользуясь картой чисел, чтобы в результате получилось, например:
   
       ```
        'meal'
        
       ```
   Результат функции должен вернуть строку
   
   [kata](https://www.codewars.com/kata/5f5802bf4c2cc4001a6f859e/train/javascript)
*/


console.log('                       Задача 10');


let arr10 = [
    ['m', 'y', 'e'], 
    ['x', 'a', 'm'], 
    ['p', 'l', 'e']
];

arr10 = arr10.flat(Infinity);

function findWord(arr10,arrMap) {
    let NewWord = [];
    for (i = 0; i < arrMap.length; i++) {
        NewWord.push(arr10[arrMap[i]- 1]);
    }
    return NewWord;
}

console.log(findWord(arr10,[1, 3, 5, 8]));


//Задание 11

/*Здесь вам в аргументах даны 2 массива: 
    
    Нужно преобразовать каждый массив удалив в нем повторяющиеся числа.
    
    После чего склеить эти два массива, отсортировать и вернуть как результат

    [kata](https://www.codewars.com/kata/56d949281b5fdc7666000004/train/javascript)
    

* Для быстрого составления регулярного выражения и проверки исп. онлайн-
сервис https://regex101.com/.

Для ввода значений можете использовать ф-цию prompt(), либо задавать
значения при инициализации переменных в коде.
Для вывода результатов скриптов вы можете использовать функции: alert()
для вывода всплывающего окна; console.log() для вывода в консоль браузера;
document.write() для вывода в «тело» HTML-документа.*/

console.log('                       Задача 11');

