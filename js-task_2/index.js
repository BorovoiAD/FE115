//JS 2

                        //не решены задачи с катой 

console.log('                                       БЛОК JS2');

//Задача 1
//1.	Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д. Выведите на экран фразу
                    
    console.log('                                ЗАДАЧА 1');
                    
        let name = prompt("Введите имя"),
        age = prompt("Введите возраст"),
        city = prompt("Введите город"),
        phone = prompt("Введите телефон"),
        email = prompt("Введите почту"),
        company = prompt("Введите компанию");
                        
    console.log(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company} . Мои контакные данные: ${phone} , ${email}. `)
                    
//Задача 2
//Определите по введенному возрасту (исп. значение из задания 1) год рождения. Выведите на экран «%Имя% родился в %Год% году.».
                    
    console.log('                                ЗАДАЧА 2');
                    
        let recent_year = 2021;
        let year = recent_year - +age;
        console.log(`${name} родил(ся/ась) в ${year}`)
                        
                    
                    
//Задача 3
// Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
                    
    onsole.log('                                ЗАДАЧА 3');
                    
    let a3 = '123456';
    let sum1 = +a3[0] + +a3[1] + +a3[3],    sum2= +a3[3] + +a3[4] + +a3[5];
    console.log(sum1,sum2);
        if (sum1 == sum2) {
        console.log('Да');
        } else {
        console.log('Нет')
        }
                    
                    
//Задача 4
//	Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
                    
console.log('                                ЗАДАЧА 4');
                    
    let a4 = -3;
    if (a4>0) {
    console.log("Верно")
    } else {
    console.log("Не Верно")
    }
                    
                    
//Задача 5
//	Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение, частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в квадрат.
                    
    console.log('                                ЗАДАЧА 5');
                      
    let a=10, b=2;
    console.log("Сумма "  + (a+b) + " , разность " + (a-b) + " , произведение " + (a*b) + " , частное " + (a/b) );
                    
        if ((a+b)>1) {
            console.log(Math.pow ( (a+b), 2));
            }
                    
//Задача 6
//Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания 5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите 'Неверно'.
                    
console.log('                                ЗАДАЧА 6');
                    
    (a>2 && a<11 && b>=6 && b<14)   ? console.log('Верно')
                                    : console.log('Не Верно');
                       
                       
                    
 //Задача 7 (kata)
 //Ваша задача - создать функцию, выполняющую четыре основные математические операции. Функция должна принимать три аргумента - операцию(string), значение1(number), значение2(number). Функция должна возвращать результат чисел после применения выбранной операции.
                    
console.log('                                ЗАДАЧА 7');
                    
//Задача 8 (kata)
//	Время бонусов в большом городе! Толстосумы потирают лапы в предвкушении... но кто заработает больше всего денег?
//Постройте функцию, которая принимает два аргумента (зарплата, бонус). Зарплата будет целым числом, а бонус - булевым. Если бонус верен, то зарплата должна быть умножена на 10. Если бонус ложный, то толстосум не заработал достаточно денег и должен получить только заявленную зарплату. Ниже приведен пример результата выполнения функции
                    
onsole.log('                                ЗАДАЧА 8');
                    
//Задача 9 (kata)
//Вам нужно выставить оценку в аттестате успеваемости. Завершите функцию так, чтобы она нашла среднее значение трех переданных ей оценок и вернула буквенное значение, связанное с этой оценкой.
                    
console.log('                                ЗАДАЧА 9');
                    



