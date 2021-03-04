// -1- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// function invisibleDiv(){
//     let hiddenDiv = document.getElementById('text');
//     hiddenDiv.addEventListener('click',()=>{
//           hiddenDiv.style.display = 'none'
//     })

// -2- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// function invisibleButton(){
//     let button = document.getElementById('btn');
//     button.addEventListener('click',()=>{
//         button.style.display = 'none'
//     })
// }

// -3- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// function checkAge() {
//     const input = document.getElementsByTagName("input");
//         let age = input[0].value
//     if (age < 18 && age > 0) {
//         alert('to young')
//     }
//     if (age <= 0 || age > 120) {
//         alert('wrong age')
//      }
//
// }

// -4- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
// let comments = [
//     {title: 'lorem1', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, sapiente.'},
//     {
//         title: 'lorem2',
//         body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum illo illum laudantium quae quas.' +
//             ' Voluptate.'
//     },
//     {
//         title: 'lorem3',
//         body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
//             'Harum ipsa laborum molestias nihil quae recusandae sit\n' +
//             '    soluta sunt tempora totam.'
//     },
//     {
//         title: 'lorem4',
//         body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
//             ' Ab animi commodi deleniti dicta, eaque esse excepturi fuga\n' +
//             '    fugit in magnam necessitatibus neque nobis pariatur repellendus!'
//     },
//     {title: 'lorem5', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
//
// ]
// let content = document.getElementById("content")
// comments.forEach(value => {
//     let div = document.createElement('div')
//     let h3 = document.createElement('h3')
//     let p = document.createElement('p')
//     let btn = document.createElement('button')
//
//     h3.innerHTML = value.title
//     p.innerHTML = value.body
//     btn.innerText = 'Hide'
//
//     div.appendChild(h3)
//     div.appendChild(p)
//     div.appendChild(btn)
//     content.appendChild(div)
//
//     btn.onclick = () => {
//         p.hidden = !p.hidden;
//         if (p.hidden) {
//             btn.innerText = 'Show'
//         }
//         if (!p.hidden) {
//             btn.innerText = 'Hide'
//         }
//     }
// })

// -5-***- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
// let swearWords = ['xxx', 'yyy', 'ffff', 'yopta', 'nafig', 'pox'];
// let input = document.getElementsByTagName("input");
// let btn = document.getElementById('word');
//
// btn.onclick = function () {
//     swearWords.forEach(value => {
//         let word = input[0].value
//         if (word === value) {
//             alert('wrong value');
//         }
//     });
// }

// -6- Создайте меню, которое раскрывается/сворачивается при клике
//   const menu = document.getElementById('menu')
//   const dropdownContent = document.getElementById('dropdown-content')
// let flag = false;
// menu.onclick = ev => {
//        if(flag){
//            dropdownContent.style.display='block'
//            flag = false
//        }else{
//            dropdownContent.style.display='none'
//            flag=true
//        }
//    }

// -7- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let btn = document.getElementById('target');
// btn.onclick = ev =>{
// let inputs = document.getElementsByTagName("input")
// let value1 = inputs[0].value;
// let value2 = inputs[1].value;
// let value3 = inputs[2].value;
// let value4 = inputs[3].value;
//     console.log(value1,value2,value3,value4);
// }

// -8- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let button = document.getElementById('btn')
// button.onclick=function() {
//     let rows = document.getElementById('rows').value;
//     let cols = document.getElementById('cols').value;
//     let text = document.getElementById('cell').value;
//     let theader = '<table border="1">\n';
//     let tbody = '';
//
//     for( let i=0; i<rows;i++)
//     {
//         tbody += '<tr>';
//         for( let j=0; j<cols;j++)
//         {
//             tbody += '<td>';
//             tbody += text;
//
//         }
//         tbody += '</tr>\n';
//     }
//     let tfooter = '</table>';
//     document.getElementById('wrapper').innerHTML = theader +  tbody + tfooter;
// }


