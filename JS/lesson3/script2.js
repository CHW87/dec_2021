// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// let dog = {name:'lucky', color:'brown', weight:30, breed:'labrador',height:55}
// - людину
// let man = {name:'Vova', age:33, status: true, weight:78, height:180}
// - автомобіль
// let car = {brand:'audi', model:'r8', color:'gold', speed:350, weight:1400}
// - квартиру
// let flat = {parameters: ['height','width','length'] ,color: 'yellow', rooms: {quantity: 5 } };

// - книгу
// let book = {name: 'Rich father,poor father', printing:1000000, status:true, color:'black',pages:250}
// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
//
// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

//
//
// Дан массив:
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне

// - статус Андрія
// for (const user of users) {
//     if(user.name === 'andrey'){
//         console.log(user.status);
//     }
// }

// - статус Максима
// for (const user of users) {
//     if(user.name === 'max'){
//         console.log(user.status);
//     }
// }

// - ім'я передостаннього об'єкту
// for (let i = users.length - 1; i >= 0; i--) {
//     const user = users[i];
//     console.log(users[users.length - 2].name);
// }

// - ім'я третього об'єкта
// for (let i = 0 ;i < users.length; i++) {
//     const user = users[i];
//     console.log(users[2].name);
// }

// - вік Олега
//   for (const user of users) {
//     if(user.name === 'oleg'){
//         console.log(user.age);
//     }
// }

// - вік Олі
//   for (const user of users) {
//     if(user.name === 'olya'){
//         console.log(user.age);
//     }
// }

// - вік + ім'я 5го об'єкта
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
// }
// console.log(users[4].name);
// console.log(users[4].age)

// - вік + сатус Анни
// for (const user of users) {
//     if (user.name === 'anya') {
//               console.log(user.age);
//         console.log(user.status);
//     }
// }


// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
//
// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний
//
// ====================
// ====================
// ====================
//
// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// -- робить шириниу елементу ul 400 пікселів
// -- робить шириниу всіх елементів з класом linkList шириною 50%
// -- отримує текст який зберігається в елементі з класом listElement2
// -- отримує всі елементи li та змінює ім колір фону на сірий
// -- отримує всі елементи 'a' та додає їм клас anchor
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
