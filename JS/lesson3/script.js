//-- 1--создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let user = {name:'Vasya', age:33, skill:'java'}
// let dog = {name:'jack', color:'black', weight:35}
// let car = {model: 'mazda', year: 2008, engineCapacity:1.6}
// let house = {location:'Lviv', stage:3, heigt:9}
// let city = {region:'Kyiv', population:2887974, area:839}
//
// // --2-- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let man = { name: 'John', skills : ['java','js','python'] , woman: { name: 'Diana',status:true } };
// let wife = {county: 'ukraine',car : ['audi','ford'] , children: { status: 'students',study :'english' } };
// let flat = {parameters: ['height','width','lenth'] ,color: 'yellow', rooms: {quantity: 5 } };
// let town = {region : 'Lviv',districts: ['Syhiv','Levandivka'],people:{ population: 800000 } };
// let auto = {model: 'mazda', year: [2003, 2009], type: ['sedan','hatchback'],wheels:{ r:16, h:195}};

//--3-- При помощи for in вывести все ключи всех объектов из задания 1 и 2
//for (const key in user) {
//    console.log(key);
//}
//for (const key in dog) {
//    console.log(key);
//}
// for (const key in car){
//        console.log(key);
//}
//for (const key in house) {
//     console.log(key);
//}
//for (const key in city) {
//     console.log(key);
//}
//
//for (const key in man) {
//    console.log(key);
//}
//for (const key in man.woman) {
//    console.log(key);
//}
//for (const key in wife){
//        console.log(key);
//}
//for (const key in wife.children) {
//    console.log(key);
//}
//for (const key in flat) {
//    console.log(key)
//}
//for (const key in flat.rooms) {
//    console.log(key);
//}
//for (const key in town) {
//    console.log(key);
//}
//for (const key in town.people) {
//    console.log(key);
//}
//for (const key in car) {
//    console.log(key);
//}
//for (const key in car.wheels) {
//    console.log(key);
//}

// --4-- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(user));
// console.log(Object.keys(dog));
// console.log(Object.keys(car));
// console.log(Object.keys(house));
// console.log(Object.keys(city));
// console.log(Object.keys(man));
// console.log(Object.keys(man.woman));
// console.log(Object.keys(wife));
// console.log(Object.keys(wife.children));
// console.log(Object.keys(flat));
// console.log(Object.keys(flat.rooms));
// console.log(Object.keys(town));
// console.log(Object.keys(town.people));
// console.log(Object.keys(auto));
// console.log(Object.keys(auto.wheels));

//--5-- Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
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

//--6-- Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [
//    {name: 'Los Angeles', population: 3792621,country:'USA',region:'North America' },
//    {name: 'New York', population: 8175133,country:'USA',region:'North America'},
//    {name: 'Houston', population: 2099451,country:'USA',region:'South America'},
//    {name: 'Roma', population: 1026006,country:'Italy',region:'Europe'},
//    {name: 'Barselona', population: 2826006,country:'Spain',region:'Europe'},
//    {name: 'Chicago', population: 2695598,country:'USA',region:'South America'},
//    {name: 'Sidney', population: 2320000,country:'USA',region:'Australia'},
//    {name: 'Kyiv', population: 2887974,country:'Ukraine',region:'East Europe'},
//    {name: 'Lviv', population: 1250006,country:'Ukraine',region:'East Europe'},
//    {name: 'Wroclaw', population: 1426006,country:'Poland',region:'Europe'}
//    ];

//--7-- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let carsArrayDriver = [
//     {
//         model: 'mazda',
//         year: 2008,
//         engineCapacity: 1.6,
//         color: 'red',
//         driver: {name: 'Lena', age: 42, sex: 'female', experience: 22,}
//     },
//     {
//         model: 'mazda',
//         year: 2003,
//         engineCapacity: 2.0,
//         color: 'yellow',
//         driver: {name: 'Victor', age: 32, sex: 'male', experience: 12,}
//     },
//     {
//         model: 'ford',
//         year: 1988,
//         engineCapacity: 2.2,
//         color: 'blue',
//         driver: {name: 'Alena', age: 22, sex: 'female', experience: 2,}
//     },
//     {
//         model: 'nissan',
//         year: 2000,
//         engineCapacity: 2.4,
//         color: 'orange',
//         driver: {name: 'Vasya', age: 34, sex: 'male', experience: 15,}
//     },
//     {
//         model: 'mersedes',
//         year: 2010,
//         engineCapacity: 3.0,
//         color: 'white',
//         driver: {name: 'Vova', age: 33, sex: 'male', experience: 6,}
//     },
//     {
//         model: 'audi',
//         year: 2018,
//         engineCapacity: 3.2,
//         color: 'green',
//         driver: {name: 'Andriy', age: 45, sex: 'male', experience: 22,}
//     },
//     {
//         model: 'ferrari',
//         year: 1905,
//         engineCapacity: 4.0,
//         color: 'silver',
//         driver: {name: 'Victoria', age: 48, sex: 'female', experience: 21,}
//     },
//     {
//         model: 'lamborginy',
//         year: 1999,
//         engineCapacity: 6.0,
//         color: 'black',
//         driver: {name: 'Petya', age: 22, sex: 'male', experience: 2,}
//     },
//     {
//         model: 'honda',
//         year: 2018,
//         engineCapacity: 1.9,
//         color: 'purple',
//         driver: {name: 'Diana', age: 40, sex: 'female', experience: 10,}
//     },
//     {
//         model: 'hunday',
//         year: 2012,
//         engineCapacity: 1.5,
//         color: 'gold',
//         driver: {name: 'Sveta', age: 55, sex: 'female', experience: 22,}
//     }
// ];

//--8-- проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
// while(i < cities.length){
//    console.log(cities[i]);
//    i++
// }
// let j = 0;
// while(j < carsArray.length){
//    console.log(carsArray[j]);
//    j++
// }
// let k = 0;
// while(k < carsArrayDriver.length){
//    console.log(carsArrayDriver[k]);
//    k++
// }

//--9-- проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let i = 0;i < cities.length;i++){
//    console.log(cities[i]);
// }
//
// for (let j = 0;j < carsArray.length;j++){
//     console.log(carsArray[j]);
// }
// for (let k = 0;k < carsArrayDriver.length;k++){
//     console.log(carsArrayDriver[k]);
// }

// --10-- проитерировать каждый массив из задания 5,6,7 при помощи for of
// for (let city of cities) {
//    console.log(city);
// } ;
// for (let carsArrayElement of carsArray) {
//    console.log(carsArrayElement);
// } ;
// for (let carsArrayDriverElement of carsArrayDriver) {
//    console.log(carsArrayDriverElement);
// }

//--11-- взять объекты из задания 1 и превратить каждый в json.
// let a = JSON.stringify(user);
// console.log(a);
//
// let b = JSON.stringify(dog);
// console.log(b);
//
// let c = JSON.stringify(car);
// console.log(c);
//
// let d = JSON.stringify(house);
// console.log(d);
//
// let e = JSON.stringify(city);
// console.log(e);

////--12-- взять json из задания 11 и превратить их обратно в объекты.
// let a1 = JSON.parse(a);
// console.log(a1);
//
// let b1 = JSON.parse(b);
// console.log(b1);
//
// let c1 = JSON.parse(c);
// console.log(c1);
//
//  let d1 = JSON.parse(d);
//  console.log(d1);
//
//  let e1= JSON.parse(e);
//  console.log(e1);

//--13-- взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
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
// for (let car of carsArray) {
//    console.log(JSON.stringify(car));
// }

//--14-- взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// for (const city of cities) {
//      console.log(JSON.stringify(city));
// }

//--15-- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let newArray = [];
// for (const carsArrayDriverElement of carsArrayDriver) {
//    newArray.push(JSON.stringify(carsArrayDriverElement));
//    }
//    console.log(newArray);

//--16-- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
//--17-- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
//    {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//    {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//    {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']},
//    {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//    {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}
//    ];
// let newArray = [];
// for (let user of users) {
//    for (const skill of user.skills) {
//       newArray.push(user.skills)
//        }
// }
// console.log(newArray);

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
// // --18-- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let newArray = [];
// for (const user of users) {
//    newArray.push(user.address)
// }
// console.log(newArray);
// console.log(users);

//--19-- За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement. Всі данні в одному блоці.
// for (const user of users) {
//    let div = document.createElement("div");
//    let address = '';
//    for (const addr in user.address) {
//         address += ' ' + user.address[addr];
//    }
//    div.innerText = `User : name- ${user.name}  age- ${user.age} status- ${user.status}  address-${address}`
//    document.body.appendChild(div);
// }

//--20-- За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// for (const user of users) {
//     let outerdiv = document.createElement("div");
//     let address = '';
//     let innerdiv1 = document.createElement('div')
//     let innerdiv2 = document.createElement('div')
//     let innerdiv3 = document.createElement('div')
//     let innerdiv4 = document.createElement('div')
//     for (const addr in user.address) {
//         address += ' ' + user.address[addr];
//     }
//     innerdiv1.innerText = user.name;
//     innerdiv2.innerText = user.age;
//     innerdiv3.innerText = user.status;
//     innerdiv4.innerText = address;
//
//     outerdiv.appendChild(innerdiv1);
//     outerdiv.appendChild(innerdiv2);
//     outerdiv.appendChild(innerdiv3);
//     outerdiv.appendChild(innerdiv4);
//
//     document.body.appendChild(outerdiv);
// }

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (const user of users) {
// let outerDiv = document.createElement('div');
//   let name = document.createElement('div');
//   let age = document.createElement('div');
//   let status = document.createElement('div');
//   let address = document.createElement('div');
//   for (const field in user.address) {
//       const add = document.createElement('div')
//       add.innerHTML = user.address[field];
//       address.appendChild(add)
//   }
//   name.innerText = user.name;
//   age.innerText = user.age;
//   status.innerText = user.status;
//
//   outerDiv.appendChild(name);
//   outerDiv.appendChild(age);
//   outerDiv.appendChild(status);
//   outerDiv.appendChild(address);
//
//   document.body.appendChild(outerDiv);
// }

//- Дано 2 масиви з рівною кількістю об'єктів.
//Масиви:
//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//Записати цей об'єкт в новий масив
//Частковий приклад реультату:
//let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
//    let usersWithId = [
//    {id: 1, name: 'vasya', age: 31, status: false},
//    {id: 2, name: 'petya', age: 30, status: true},
//    {id: 3, name: 'kolya', age: 29, status: true},
//    {id: 4, name: 'olya', age: 28, status: false},
//];
//let citiesWithId = [
//    {user_id: 3, country: 'USA', city: 'Portland'},
//    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//    {user_id: 2, country: 'Poland', city: 'Krakow'},
//    {user_id: 4, country: 'USA', city: 'Miami'},
//] ;
//
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// let usersWithCities = usersWithId;
// for (const user of usersWithId) {
//   for (const city of citiesWithId) {
//       if(user.id === city.user_id){
//           user.address = city;
//       }
//   }
// console.log(usersWithCities);

//- створити розмітці блок з id, class та текстом в середені.
// Зчитати окремо цей текст з селекторів по id , class та тегу

// let elementById = document.getElementById('wrap');
// let content = elementById.innerText;
// console.log(content);

// let elementByClass = document.getElementsByClassName('rules');
// for (const elements of elementByClass) {
//    elements.innerText = 'asdfgghhjj';
//    console.log(elements);
//
// }

// let elementByTag = document.getElementsByTagName('p');
// for (const elementByTagElement of elementByTag) {
//    elementByTag.innertext = 'lorem ipsum';
//    console.log(elementByTag);
// }

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// let elementById = document.getElementById('wrap');
// let content = elementById.innerText;
// elementById.style.width = '200px';
// elementById.style.height = '200px';
// console.log(content);

//let elementByClass = document.getElementsByClassName('rules');
//for (const elements of elementByClass) {
//    elements.innerText = 'asdfgghhjj';
//    elements.style.width = '300px';
//    elements.style.height = '300px';
//    console.log(elements);
//}
//let elementByTag = document.getElementsByTagName('p');
//for (const element of elementByTag) {
//    element.innertext = 'lorem ipsum';
//    element.style.width = '100px'
//    element.style.height = '100px'
//
//    console.log(element);
//}


//- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let table = document.createElement('table')
// let tr = document.createElement('tr');
// let td1 = document.createElement('td');
// let td2 = document.createElement('td');
// let td3 = document.createElement('td');
// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);
// table.appendChild(tr);
// document.body.appendChild(table)

//- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
//  let table = document.createElement('table')
//  for (let i = 0; i < 10; i++) {
//    let tr = document.createElement('tr');
//    for (let j = 0; j < 3; j++) {
//       let td = document.createElement('td');
//       tr.appendChild(td);
//    }
//    table.appendChild(tr);
// }
// document.body.appendChild(table)

//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// let table = document.createElement('table')
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr');
//     for (let j = 0; j < 5; j++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }
//
// document.body.appendChild(table);

//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let table = document.createElement('table') ;
// let n = prompt('enter tr');
// let m = prompt('enter td');
// for (let i = 0; i < n; i++) {
//     let tr = document.createElement('tr');
//     for (let j = 0; j < m; j++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }
//
// document.body.appendChild(table);
//


//--Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають id
// let arr = document.getElementsByTagName('*') ;
// for (let tag of arr) {
//  if (tag.getAttribute('id')) {
//      console.log(tag);
//  }
// }


// - знайти всі параграфи ,та змінити текст на hello oktenweb!
//let paragraphElement = document.getElementsByTagName('p');
//for (const tag of paragraphElement) {
//     tag.innerText = 'Hello OktenWeb' ;
//}
// - знайти всі div та змінити ім колір на червоний
//let divku = document.getElementsByTagName('div');
//for (const tag of divku) {
//    tag.style.backgroundColor = 'red';
//
//}


//
//============
//====class===
//============
//
//- є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// let arrHeader = document.getElementsByTagName('h2');
// let arrContent = document.getElementById('content');
// let ul = document.createElement('ul');
// for (const h2 of arrHeader) {
//     let li = document.createElement('li');
//     li.innerText = h2.innerText;
//     ul.appendChild(li);
// }
// arrContent.appendChild(ul);

//
//-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
// ];
// let wrap = document.createElement('div');
// wrap.id = 'wrap';
// for (let i = 0; i < rules.length; i++) {
//     const rule = rules[i];
//     //console.log(rule);
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
//
//
//
//*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
//*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
//*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
//****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
