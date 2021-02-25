//-  Створити функцію конструктор для об'єкту який описує теги
//Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }

// function Tag(titleOfTag, action, attrs) {
//
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
//
// let title = '<a>';
// let action = `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок....`;
// let attrs = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
//     {titleOfAttr: 'rel', actionOfAttr: 'Отношения между ссылаемым и текущим документами'},
// ];
//
// let a = new Tag(title, action, attrs);
//
// let div = new Tag(title, action, attrs);
// div.titleOfTag = '<div>';
// div.action = `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.`;
// div.attrs = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега div.'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
//     {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
// ];
//
// let h1 = new Tag(title, action, attrs);
// h1.titleOfTag = '<h1>';
// h1.action = `Тег <h1> представляет собой наиболее важный заголовок первого уровня.По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. `;
// h1.attrs = [
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
//     {titleOfAttr: 'style', actionOfAttr: 'Применяется для определения стиля элемента с помощью правил CSS'},
//     {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
// ];
//
// let form = new Tag(title, action, attrs);
// form.titleOfTag = '<form>';
// form.action = `Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. `;
// form.attrs = [
//     {titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
//     {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
//     {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей формы.'},
// ];
//
//
// console.log(a,div,h1,form);

// ==============================================
//-  Створити класс  для об'єкту який описує теги
// class Tag {
//Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
//   {
//        titleOfTag: 'area',
//        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//        attrs: [
//        {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//        {/*some props and values*/},
//        {/*...*/},
//        {/*...*/},
//        ]
//
//   }
// class Tag {
// constructor(titleOfTag,action,attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
// }
// let title = '<a>';
// let action = `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок....`;
// let attributes = [
//             {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//             {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
//             {titleOfAttr: 'rel', actionOfAttr: 'Отношения между ссылаемым и текущим документами'},
// ];
// let a = new Tag(title,action,attributes);
// console.log(a);
//==============================================


//==============================================
//- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//==============================================
// let car = {
//     model: 'Q8',
//     manufacturer: 'Audi',
//     year: 2020,
//     maxSpeed: 260,
//     volumeEngine: 3.5,
//     vodiy: '',
// //-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     drive: function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     },
// // -- info () - яка виводить всю інформацію про автомобіль
//     info: function () {
//         if (this.vodiy) {
//             console.log(`
//     model:${this.model}
//     manufacturer:${this.manufacturer}
//     maxSpeed:${this.maxSpeed}
//     volumeEngine:${this.volumeEngine}
//     vodiy:${this.vodiy.name}
//     `);
//         } else {
//             console.log(`
//     model:${this.model}
//     manufacturer:${this.manufacturer}
//     maxSpeed:${this.maxSpeed}
//     volumeEngine:${this.volumeEngine}
//     `);
//         }
//
//     },
// //-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     increaseMaxSpeed: function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     },
// //-- changeYear (newValue) - змінює рік випуску на значення newValue
//     changeYear: function (newValue) {
//         this.year = newValue;
//     },
// //-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//     addDriver: function (driver) {
//         this.vodiy = driver;
//     }
// };
// let driver = {name: 'Vasya', age: 35};
// car.changeYear(2024);
// car.increaseMaxSpeed(100);
// car.addDriver(driver);
// car.info();
// car.drive()


//
//
//
//==============================================
//-створити класс попелюшка з полями ім'я, вік, розмір ноги
//--Створити 10 попелюшок , покласти їх в масив
//--Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//-- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//==============================================
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footsize = footSize;
    }
}

let cinderellaArray = [];
let cinderella1 = new Cinderella('Anya', 30, 37);
let cinderella2 = new Cinderella('lena', 25, 35);
let cinderella3 = new Cinderella('Olya', 34, 45);
let cinderella4 = new Cinderella('Katya', 50, 41);
let cinderella5 = new Cinderella('Sveta', 33, 35);
cinderellaArray.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5);
console.log(cinderellaArray);

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }

    findCinderella(cinderellaArray) {
        for (const cinderellaArrayElement of cinderellaArray) {
            if (cinderellaArrayElement.footsize === this.shoe) {
                console.log(cinderellaArrayElement.name)
            }
        }
    }
}
     Prince
//
//
//==============================================
//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
//--Створити 10 попелюшок , покласти їх в масив
//--Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
//-- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//==============================================
