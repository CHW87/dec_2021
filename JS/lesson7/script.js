// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// function invisibleDiv(){
//     let hiddenDiv = document.getElementById('text');
//     hiddenDiv.addEventListener('click',()=>{
//           hiddenDiv.style.display = 'none'
//     })
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// function invisibleButton(){
//     let button = document.getElementById('btn');
//     button.addEventListener('click',()=>{
//         button.style.display = 'none'
//     })
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
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

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
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
//     btn.innerText = 'Сховати'
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

// ***- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
// let swearWords = ['xxx', 'yyy', 'ffff', 'yopta','nafig','pox'];
// const input = document.getElementsByTagName("input");
// const btn = document.getElementById('word');
//
// btn.onclick=function (){
//     swearWords.forEach(value => {
//
//         let word = input[0].value
//
//         if (word === value) {
//             alert('wrong value')
//         }
//
//     });
// }


