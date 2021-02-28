// - создать массив с 20 числами.
// let array = [1,23,45,678,8,56,4,3,0,34,4,44,5,55,66,-123,-12,43,29,38];
//
// // -- при помощи метода sort отсортировать массив.
// array.sort( (a,b)=> a - b);
// console.log(array);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// array.sort ((a,b)=>b-a);
// console.log(array)

//-- при помощи filter получить числа кратные 3
// let array = [1, 23, 45, 678, 8, 200, 4, 3, 0, 34, 4, 44, 5, 55, 10, -123, -12, 43, 29, 38];
// let filter = array.filter((num) => {
//     if (num % 3 === 0 && num !== 0) {
//         return true
//     } else {
//         return false
//     }
// });
// console.log(filter);

// -- при помощи filter получить числа кратные 10
// let array = [1, 23, 45, 678, 8, 100, 4, 3, 0, 34, 4, 44, 5, 55, 10, -123, -12, 43, 29, 38];
// let filter = array.filter((num) => {
//     if (num % 10 === 0 && num !== 0) {
//         return true
//     } else {
//         false
//     }
// });
// console.log(filter);

// -- перебрать (проитерировать) массив при помощи foreach()
// let array = [1,23,45,678,8,100,4,3,0,34,4,44,5,55,10,-123,-12,43,29,38]
// let arr=array.forEach(value => console.log(value))
// console.log(arr)

// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let array = [1,23,45,678,8,100,4,3,0,34,4,44,5,55,10,-123,-12,43,29,38]
// let map = array.map(function (num) {
// return num*3
// })
// console.log(array);
// console.log(map);

//создать массив со словами на 15-20 элементов.
// let users = ['Vasya','Petya','alya','Misha','Sveta','Ira','driy','BBBB','Fedya','Dr.Koks','Kirkorov','Kolobok','Zorro']
// // -- отсортировать его по алфавиту в восходящем порядке.
// let newUsers = users.sort((a, b)=>{
//     if(a.toLowerCase()> b.toLowerCase()) {
//         return 1
//     } else {
//         return -1
//     }
// })
// console.log(newUsers);

//-- отсортировать его по алфавиту  в нисходящем порядке.
// users.sort((a, b) => {
//     if (a.toLowerCase() > b.toLowerCase()) {
//         return -1
//     } else {
//         return 1
//     }
// })
// console.log(users);

// -- отфильтровать слова длиной менее 4х символов

// let users = ['Vasya','Petya','Galya','Misha','Sveta','Ira','Andriy','Kokos','Fedya','Dr.Koks','Kirkorov','Kolobok','Zorro']
// let filter = users.filter(value => value.length < 4);
// console.log(filter);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let users = ['Vasya','Petya','Galya','Misha','Sveta','Ira','Andriy','Kokos','Fedya','Dr.Koks','Kirkorov','Kolobok','Zorro']
// let map = users.map((value)=> {
//     value += '!';
// return value
// })
// console.log(map)

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//  
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let sortIncrease = users.sort((user1,user2)=>user1.age-user2.age);
// console.log(sortIncrease)

// let sortDecrease = users.sort((user1,user2)=>user2.age-user1.age);
// console.log(sortDecrease)

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//   let sortIncrease = users.sort((user1,user2)=>user1.name.length-user2.name.length);
//   console.log(sortIncrease)
//
// let sortDecrease = users.sort((user1,user2)=>user2.name.length-user1.name.length);
// console.log(sortDecrease)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
// let usersWithId = JSON.parse(JSON.stringify(users)).map((item,index,arr)=>{
// item.id = index;
// return item;
// });
// console.log(usersWithId);
// // console.log(users);
// // - відсортувати його за індентифікатором
// usersWithId.sort((a,b)=>{
//     return a.id - b.id
// })
// console.log(usersWithId);
//
//
// -- наисать функцию калькулятора с 2мя числами и колбеком
// function calc(a,b,callback){
// return callback(a,b);
// }
// console.log(calc(100, 200, (a, b) => a*a - b/a));


// -- написать функцию калькулятора с 3мя числами и колбеком
// function calc(a,b,c,callback){
// return callback(a,b,c);
// }
//
// console.log(calc(100, 200, 100,(a, b,c) => (a*a - b/a)/c))
//
