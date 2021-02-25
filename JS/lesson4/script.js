// - створити функцію яка виводить масив
// let carsArray = [
//    { model: 'mazda', year: 2008, engineCapacity:1.6 ,color:'red'},
//    {model: 'mazda', year: 2003, engineCapacity:2.0 ,color:'yellow'},
//    {model: 'ford', year: 1988, engineCapacity:2.2 ,color:'blue'},
//    {model: 'nissan', year: 2000, engineCapacity:2.4 ,color:'orange'},
//    {model: 'mersedes', year: 2010, engineCapacity:3.0 ,color:'white'},
//    {model: 'audi', year: 2018, engineCapacity:3.2 ,color:'green'},
//    {model: 'ferrari', year: 1905, engineCapacity:4.0 ,color:'silver'},
//    {model: 'lamborginy', year: 1999, engineCapacity:6.0 ,color:'black'},
//    {model: 'honda', year: 2018, engineCapacity:1.9 ,color:'purple'},
//    {model: 'hunday', year: 2012, engineCapacity:1.5 ,color:'gold'}
//    ];
// function arr(array){
//     console.log(array)
// }
// arr(carsArray)

// - створити функцію яка заповнює масив рандомними числами та виводить його.Для виведення використати попвередню функцію.
// function mathRandom(length,min,max) {
// let arr =[];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.round((Math.random() * (max -min)+min)))
//     }
//     return arr
// }
// let arr1=mathRandom(5,10,100);
// arr(arr1)

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function minNumber(a,b,c) {
//  let min = Math.min(a,b,c);
//     console.log('minNumber', min);
//     return min
// }
// let minimum = minNumber(-20,-30,40);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function maxNumber(a,b,c) {
//  let max = Math.max(a,b,c);
//     console.log('maxNumber', max);
//     return max
// }
// let maximum = maxNumber(-20,-30,40);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function returnMinLogMax() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let argument of arguments) {
//         if (argument < min) min = argument;
//         if (argument > max) max = argument;
//     }
//     console.log('max',max);
//     return min;
// }
//
// const min = returnMinLogMax(-10, 20, 30, 40, 100);
// console.log('min',min);

// - створити функцію яка виводить масив
// let array = [-5, 33, 45, 678, 1034, -222]
//
// function printArray() {
//     console.log(array);
// }
//
// printArray()

// - створити функцію яка повертає найбільше число з масиву
// function maxNumber(array) {
//     let max = array[0];
//     for (const arrayElement of array) {
//         if (max < arrayElement) max = arrayElement
//     }
//     return max;
//     console.log(max);
// }
//  let func = maxNumber([1,4,5,6,7])
// console.log(func);

// - створити функцію яка повертає найменьше число з масиву
//  function minNumber(array) {
//     let min = array[0];
//     for (const arrayElement of array) {
//         if (min > arrayElement) min = arrayElement
//     }
//     return min;
//     console.log(min);
// }
//  let func = minNumber([1,4,5,6,-7])
// console.log(func);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function arr(array) {
//     let sum = 0;
//     for (const element of array) {
//       sum += element
//     }
//     return sum;
// }
// const s = arr([-10,-20,30,40])
// console.log(s);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function average(array) {
//     let sum = 0;
//     for (const element of array) {
//       sum += element
//     }
//     return sum/array.length;
// }
// const s = average([10,20,30,40])
// console.log(s);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// const carsArray = [
//     {model: 'mazda', year: 2008, engineCapacity: 1.6, color: 'red'},
//     {model: 'mazda', year: 2003, engineCapacity: 2.0, color: 'yellow'},
//     {model: 'ford', year: 1988, engineCapacity: 2.2, color: 'blue'},
//     {model: 'nissan', year: 2000, engineCapacity: 2.4, color: 'orange'},
//     {model: 'mersedes', year: 2010, engineCapacity: 3.0, color: 'white'},
//     {model: 'audi', year: 2018, engineCapacity: 3.2, color: 'green'},
//     {model: 'ferrari', year: 1905, engineCapacity: 4.0, color: 'silver'},
//     {model: 'lamborginy', year: 1999, engineCapacity: 6.0, color: 'black'},
//     {model: 'honda', year: 2018, engineCapacity: 1.9, color: 'purple'},
//     {model: 'hunday', year: 2012, engineCapacity: 1.5, color: 'gold'}
// ];
//
// function countObjects(arrayObjects) {
//     let count = 0;
//     for (const element of arrayObjects) {
//         if(typeof element === 'object'){
//             count++;
//         }
//     }
//     return count;
// }
//
// const n = countObjects(carsArray);
// console.log(n);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// const carsArray = [
//     {model: 'mazda', year: 2008, engineCapacity: 1.6, color: 'red'},
//     {model: 'mazda', year: 2003, engineCapacity: 2.0, color: 'yellow'},
//     {model: 'ford', year: 1988, engineCapacity: 2.2, color: 'blue'},
//     {model: 'nissan', year: 2000, engineCapacity: 2.4, color: 'orange'},
//     {model: 'mersedes', year: 2010, engineCapacity: 3.0, color: 'white'},
//     {model: 'audi', year: 2018, engineCapacity: 3.2, color: 'green'},
//     {model: 'ferrari', year: 1905, engineCapacity: 4.0, color: 'silver'},
//     {model: 'lamborginy', year: 1999, engineCapacity: 6.0, color: 'black'},
//     {model: 'honda', year: 2018, engineCapacity: 1.9, color: 'purple'},
//     {model: 'hunday', year: 2012, engineCapacity: 1.5, color: 'gold'}
// ];
// function fieldsInObjects(anyArray) {
//      let count = 0;
//     for (const element of anyArray) {
//         if (typeof element === 'object') {
//             for (const elementKey in element) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }
//
// const n = fieldsInObjects(carsArray);
// console.log(n);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// function elWithSameIndex(arr1,arr2) {
//     let sum=[];
//     for (let i = 0; i < arr1.length; i++) {
//         sum.push(arr1[i]+arr2[i]);
//     }
//     return sum
// }
// const  elWithSameIndex1 = elWithSameIndex([1,2,3,4,5],[5,4,3,2,1]);
// console.log(elWithSameIndex1);
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// Створити функцію яка :

// - Додає в боді блок з текстом "Hello owu"
// function addText() {
//     let element = document.createElement('div');
//     element.innerText = 'Hello owu';
//     document.body.appendChild(element)
// }
// addText()

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function addText(tag,txt) {
//     let element = document.createElement(tag);
//     element.innerText = txt;
//     document.body.appendChild(element)
// }
// addText('div','Hello owu')

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// let carsArray = [
//    { model: 'mazda', year: 2008, engineCapacity:1.6 ,color:'red'},
//    {model: 'mazda', year: 2003, engineCapacity:2.0 ,color:'yellow'},
//    {model: 'ford', year: 1988, engineCapacity:2.2 ,color:'blue'},
//    {model: 'nissan', year: 2000, engineCapacity:2.4 ,color:'orange'},
//    {model: 'mersedes', year: 2010, engineCapacity:3.0 ,color:'white'},
//    {model: 'audi', year: 2018, engineCapacity:3.2 ,color:'green'},
//    {model: 'ferrari', year: 1905, engineCapacity:4.0 ,color:'silver'},
//    {model: 'lamborginy', year: 1999, engineCapacity:6.0 ,color:'black'},
//    {model: 'honda', year: 2018, engineCapacity:1.9 ,color:'purple'},
//    {model: 'hunday', year: 2012, engineCapacity:1.5 ,color:'gold'}
//    ];
// function listOfCars(carsArray,tagId) {
//     let divId = document.getElementById(tagId)
//     let list = document.createElement('ul')
//     for (let i = 0; i < carsArray.length; i++) {
//         const car = carsArray[i]
//         const li = document.createElement('li')
//         li.innerHTML = `${i} - ${car.model}`
//         list.appendChild(li)
//     }
//     divId.appendChild(list)
// }
// listOfCars(carsArray,'cars')


// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
//     function listOfCars(carsArray,idTag) {
//     let divId = document.getElementById(idTag)
//     let block = document.createElement('div')
//     for (let i = 0; i < carsArray.length; i++) {
//         const car = carsArray[i]
//         const div = document.createElement('div')
//         div.innerHTML = ` ${i+1}:${car.model}_${car.year}_${car.engineCapacity}_${car.color}`;
//         block.appendChild(div)
//     }
//     divId.appendChild(block)
// }
// listOfCars(carsArray,'cars')
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// function listOfCars(carsArray, idTag) {
//     let divId = document.getElementById(idTag)
//     for (let i = 0; i < carsArray.length; i++) {
//         const car = carsArray[i]
//         let block = document.createElement('div');
//         let model = document.createElement('h2');
//         let year = document.createElement('h3');
//         let engineCapacity = document.createElement('h4');
//         let color = document.createElement('p');
//
//         model.innerHTML = `model: ${car.model}`;
//         year.innerHTML = `year: ${car.year}`;
//         engineCapacity.innerHTML = `engineCapacity: ${car.engineCapacity}`;
//         color.innerHTML = `color: ${car.color}`;
//         block.appendChild(model);
//         block.appendChild(year);
//         block.appendChild(engineCapacity);
//         block.appendChild(color);
//         divId.appendChild(block)
//     }
// }
// listOfCars(carsArray,'cars')

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// // Частковий приклад реультату:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// function userWithAddress(arrUsers,arrCities) {
//     let users = JSON.parse(JSON.stringify(arrUsers));
//     let cities =JSON.parse(JSON.stringify(arrCities));
//     for (const user of users) {
//         for (const city of cities) {
//             if (user.id === city.user_id) {
//                 user.address = city;
//             }
//         }
//     }
//     return users
// }
// const result = userWithAddress(usersWithId,citiesWithId)
// console.log('usersWithAddress',result);

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let rules = [
//     {
//     title: 'Первое правило Бойцовского клуба.',
//     body: 'Никому не рассказывать о Бойцовском клубе.'
// }, {
//     title: 'Второе правило Бойцовского клуба.',
//     body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// }, {
//     title: 'Третье правило Бойцовского клуба.',
//     body: 'В схватке участвуют только двое.'
// }, {
//     title: 'Четвертое правило Бойцовского клуба.',
//     body: 'Не более одного поединка за один раз.'
// },
// {
//     title: 'Пятое правило Бойцовского клуба.',
//     body: 'Бойцы сражаются без обуви и голые по пояс.'
// },
// {
//     title: 'Шестое правило Бойцовского клуба.',
//     body: 'Поединок продолжается столько, сколько потребуется.'
// },
// {
//     title: 'Седьмое правило Бойцовского клуба.',
//     body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// },
// {
//     title: 'Восьмое и последнее правило Бойцовского клуба.',
//     body: 'Новичок обязан принять бой.'
// },
// ];
// function rulesFunk(rules){
//     let wrap = document.createElement('div');
// wrap.id = 'wrap';
// for (let i = 0; i < rules.length; i++) {
//     const rule = rules[i];
//     console.log(rule);
//     let div = document.createElement('div');
//     let h2 = document.createElement('h2');
//     let p = document.createElement('p');
//     div.className = `rules rule${i + 1}`;
//     h2.innerText = rule.title;
//     p.innerText = rule.body;
//     div.appendChild(h2);
//     div.appendChild(p);
//     wrap.appendChild(div);
// }
// document.body.appendChild(wrap)
// }
// rulesFunk(rules)
// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
// function sqrt2(n) {
//    let result = Math.sqrt(n);
//    if(result === 1 && typeof (result)=== 'int'){
//        console.log('YES')
//    } else if (result !==1 || typeof (result) !== 'int'{
//        console.log('NO');
//    }
//    return result
// }
// sqrt2(2)
// let isExponentTwo = (num) => num & (num - 1) ? 'NO' : 'YES';
// console.log(isExponentTwo(0))
let isExponentTwo = (num) => (num & (num - 1)) && num != 0 ? 'NO' : 'YES';
console.log(isExponentTwo(24))

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========


