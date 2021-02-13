//--створити масив та вивести його в консоль:

//- з 5 числових значень
// let numbersArray = [10, 123, 321, 555, 12]
// console.log(numbersArray);

////- з 5 стрічкових значень
//
//let stringArray = ['one', 'two', 'three', 'for', 'five']
//console.log(stringArray);

////- з 5 значень стрічкового, числового та булевого типу
//
//let strnumboolArray = ['one', 2, true, 44, false]
//console.log(strnumboolArray);

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//let emptyArray = []
//
//emptyArray[0] = ('text')
//emptyArray[1] = (true)
//emptyArray[2] = (123)
//emptyArray[3] = ['one', 'two', 'three', 'for', 'five']
//emptyArray[4] = (null)
//console.log(emptyArray);

//
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//for (let i = 0; i < 10; i++ )
//{
//    document.write('<div> Text </div>')
//}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++ ){
//     document.write('<div> Text : '+ i +' </div>')
//}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//     document.write('<h1> Text </h1>')
//     i++;
// }

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//let i = 0;
//   while (i < 20) {
//     document.write(`<div> Text : ${i} </div>`)
//     i++
//     }// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//let numbersArray = [10, 123, 321, 555, 12, -2, 5.5, 6, 33, 44]
//for (let i = 0; i < 10; i++) {
//    console.log(numbersArray[i])
//}

// Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
// let usersArray = ['Vasya', 'Petya', 'Fedya', 'Katya', 'Ulya', 'Olya', 'Vova','Diana', 'Andrij', 'Stepan']
// for (let i = 0; i < 10; i++) {
//     console.log(usersArray[i])
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let array = ['Vasya', '-555', true, 45, null, 'Olya', 'Vova',0 , false, 'Stepan']
// for (let i = 0; i < array.length; i++) {
//     console.log(numbersArray[i])
//}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//let array = ['Vasya', '-555', true, 45, null, 'Olya', 'Vova',0 , false, 'Stepan']
//for (let i = 0; i < array.length; i++) {
//    if (typeof array[i] === 'boolean') {
//        console.log(array[i])
//    }
//}
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let array = ['Vasya', '-555', true, 45, null, 'Olya', 'Vova',0 , false, 'Stepan']
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number') {
//         console.log(array[i])
//     }
// }
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//let array = ['Vasya', '-555', true, 45, null, 'Olya', 'Vova',0 , false, 'Stepan']
//for (let i = 0; i < array.length; i++) {
//    if (typeof array[i] === 'string') {
//        console.log(array[i])
//    }
//}

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//let emptyArray = []
//emptyArray[0] = ('text')
//emptyArray[1] = (true)
//emptyArray[2] = (123)
//emptyArray[3] = ['one', 'two', 'three', 'for', 'five']
//emptyArray[4] = (null)
//emptyArray[5] = ('test')
//emptyArray[6] = (5 > 6)
//emptyArray[8] = (NaN)
//emptyArray[9] = ['1', '2', 3, 4, 'five']
//emptyArray[10] = (null)
//for (let i = 0; i < emptyArray.length; i++) {
//    const emptyArrayElement = emptyArray[i];
//    console.log(emptyArray[i])
//}
//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//for (let i = 0; i < 10; i++) {
//   console.log('step:',i);
//   document.write('<div> step: '+ i +'</div>');
//}
//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//for (let i = 0; i < 100; i++) {
//    console.log('крок:', i);
//    document.write('<div> крок: ' + i + '</div>');
//}


//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//for (let i = 0; i < 200; i=i+2) {
//    console.log('крок:', i);
//    document.write(`крок: ${i} <br>`);
//}

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//  for (let i = 0; i < 100; i++) {
//      if (i % 2 === 0) {
//          console.log('крок:', i);
//          document.write(`крок: ${i} <br>`);
//      }
//  }
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i < 100; i+= 2) {
//     if (i % 2 === 0)
//         console.log('крок:', i);
//         document.write(`крок: ${i} <br>`);
// }

//- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let i = 0; i <= 60; i++) {
//     for (let j = 0; j <= 60; j++) {
//         if (i == 2 && j == 20)
//         console.log(i, j);
//     }
// }


//- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (let h = 0; h < 23; h++) {
//
//     for (let m = 0; m < 60; m++) {
//
//         for (let s = 0; s < 60; s++) {
//             console.log(h + 'hour: '+ m + 'min:'+ s + 'sec')
//             if (h === 2 && m === 20 && s === 0) {
//                 h = 23;
//                 m = 60;
//                 break
//             }
//
//         }
//     }
// }
//

// Додатково ///////////////////////////////////////////////////////////////////////

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//let array = [ 'a', 'b', 'c'];
//let word = ' ';
//for (let i = 0; i < array.length; i++) {
//    word = word + array[i];
//}
//    console.log(word);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//let array = [ 'a', 'b', 'c'];
//let i = 0;
//let word = ' ';
//while (i < array.length) {
//    word = word + array[i];
//    i++;
//}
//    console.log(word);


//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//let array = [ 'a', 'b', 'c'];
//let word = ''
//for (const string of array) {
//    word = word + string
//}
//console.log(word);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.
//let array = [ 'a', 'b', 'c'];
//let word = ''
//for (const string in array) {
//    word = word + array[string];
//}
//console.log(word);


//=================
//=================
//=================
//=================

//- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

//let array = [ 'a', 'b', 'c'];
//array.push(1, 2, 3)
//console.log(array);

//- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
//let array = [1, 2, 3];
//let newArray = [];
//for (let i = array.length-1;i >=0;i--) {
//    newArray.push(array[i])
//}
//    console.log(newArray);

//- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
//let array = [ 1, 2, 3];
//array.push(4, 5, 6)
//console.log(array);

//- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
//let array = [ 1, 2, 3];
//array.unshift(4, 5, 6)
//console.log(array);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
//let arr = ['js', 'css', 'jq'] ;
//let shiftedElement = arr.shift();
//document.write(shiftedElement);

//- Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
//let arr = ['js', 'css', 'jq'] ;
//let popedElement = arr.pop();
//document.write(popedElement);

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
//let num = [1, 2, 3, 4, 5]
//console.log(num.slice(3));

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
//let num = [1, 2, 3, 4, 5]
//console.log(num.slice(0,2));

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
//let num = [1, 2, 3, 4, 5]
//let splice = (num.splice(1,2));
//console.log(num);

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//let num = [1, 2, 3, 4, 5]
//let splice = (num.splice(3,0, 'a' , 'b', 'c'));
//console.log(num);

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//  let num = [1, 2, 3, 4, 5]
// let splice = (num.splice(1, 0, 'a', 'b' ));
// let splice = (num.splice(6,0, 'c' ));
// let splice = (num.splice(9,0, 'e' ));
// console.log(num);

//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//let numbersArray = [10, 123, 321, 555, 12, -2, 5.5, 6, 33, 44]
// for (let i = 0; i < 10; i++) {
//     if (numbersArray[i] % 2 === 0)
//         console.log(numbersArray[i]);
//     }

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
//let numbersArray = [10, 123, 321, 555, 12, -2, 5.5, 6, 33, 44] ;
//let newArray = []
//for (let i = 0; i < numbersArray.length; i++) {
//
//    newArray.push(numbersArray[i])
//}
//console.log(newArray);

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//let numbersArray = [10, 123, 321, 555, 12, -2, 5.5, 6, 33, 44] ;
//let newArray = []
//for (let i = 0; i < numbersArray.length; i++) {
//    newArray[i] = (numbersArray[i])
//}
//console.log(newArray);                                               //
//============

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

//1. перебрати його циклом while
// let i = 0;
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// while (i < arr.length) {
//    console.log(arr[i]);
//    i++;
// }

//2. перебрати його циклом for
//let arr = [2,17,13,6,22,31,45,66,100,-18];
//for (let i = 0; i < arr.length; i++) {
//    const arrElement = arr[i];
//    console.log(arrElement);
//}

//3. перебрати циклом while та вивести  числа тільки з непарним індексом
//let arr = [2,17,13,6,22,31,45,66,100,-18];
//let i = 1;
//while (i < arr.length ) {
//         console.log(arr[i ]);
//    i+= 2;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//let arr = [2,17,13,6,22,31,45,66,100,-18];
//for (let i = 1; i < arr.length; i+= 2) {
//    console.log(arr[i]);
//}

//5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// while (i < arr.length) {
//     if (arr[i] % 2 === 0)
//     console.log(arr[i]);
//    i++
// }

//6. перебрати циклом for та вивести  числа тільки парні  значення
//let arr = [2,17,13,6,22,31,45,66,100,-18];
//for (let i = 0; i < 10; i++) {
//    if (arr[i] % 2 === 0)
//        console.log(arr[i]);
//    }

//7. замінити кожне число кратне 3 на слово "okten"
//let arr = [2,17,13,6,22,31,45,66,100,-18];
//for (let i = 0; i < 10; i++) {
//    if (arr[i] % 3 === 0){
//       arr[i] = 'okten'
//    }
// console.log(arr[i]);
//}

//8. вивести масив в зворотньому порядку.
//let arr = [2,17,13,6,22,31,45,66,100,-18];
//for (let i = 9; i < 10; i--) {
//    console.log(arr[i]);
//}

//9. всі попередні завдання (окрім 9), але в зворотньому циклі (с заду на перед)

//9.1. перебрати його циклом while
// let i = 10 ;
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// while (i >= 0) {
//    console.log(arr[i]);
//    i--;
// }

//9.2. перебрати його циклом for
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length-1; i >=0 ; i--) {
//      console.log(arr[i]);
// }

//9.3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 9;
// while (i >=0) {
//         console.log(arr[i ]);
//    i-= 2;
// }

//9. 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length-1; i >0 ; i-= 2) {
//    console.log(arr[i]);
// }

//9.5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 9;
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// while (i >= 0) {
//     if (arr [i]% 2 === 0)
//     console.log(arr[i]);
//    i--
// }

//9.6. перебрати циклом for та вивести  числа тільки парні  значення
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length-1; i >=0; i--) {
//    if (arr[i] % 2 === 0)
//        console.log(arr[i]);
//    }

//9.7. замінити кожне число кратне 3 на слово "okten"
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length-1; i >=0; i--) {
//    if (arr[i] % 3 === 0){
//       arr[i] = 'okten'
//    }
// console.log(arr[i]);
// }


//10.створити пустий масив та :
//1. заповнити його 50 парними числами за допомоги циклу.
// let arr = [];
// for (let i = 0; i < 50; i++) {
//         arr[i] = i*2;
// }
// console.log(arr);


//2. заповнити його 50 непарними числами за допомоги циклу.
// let arr = [];
// for (let i = 0; i < 50; i++) {
//         arr[i] = i*2+1;
// }
// console.log(arr);

// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
// let mathArray=[]
// for (let i = 0; i < 20; i++) {
//     mathArray[i]=Math.floor((Math.random()*732-8)+8);
// }
// console.log(mathArray);

// диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)

// 2. вывести на консоль  каждый третий елемент
// for (let i = 2; i < mathArray.length; i+=3) {
//     console.log(mathArray[i]);
// }

// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.
// for (let i = 2; i < mathArray.length; i+=3) {
//     if (mathArray[i]%2===0)
//     console.log(mathArray[i]);
// }

// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив
// let newArray= [];
// for (let i = 2; i < mathArray.length; i+=3) {
//     if (mathArray[i]%2===0){
//       newArray.push( mathArray[i]);
//     }
// }
// console.log(newArray);

// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// for (let i = 0; i < mathArray.length; i++) {
//
//     if (mathArray[i+1] % 2 === 0) {
//         console.log(mathArray[i]);
//     }
// }

//  дано масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
// let arr =[100,250,50,168,120,345,188] ;
// let sum=0;
// for (let i = 0; i < arr.length; i++) {
//     sum+= arr[i]/arr.length;
// }
//     console.log(sum);

//3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let mathArray = []
// for (let i = 0; i < 20; i++) {
//     mathArray[i] = Math.floor((Math.random() * 732 - 8) + 8)
// }
// let newArray = []
// for (let i = 0; i < mathArray.length; i++) {
//     newArray[i] = mathArray[i]* 5;
// }
// console.log(mathArray);
// console.log(newArray);

//4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.
// let arr=['string',123,33,false,22.39,0,'true']
// let newArray =[]
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i]==="number")
//     newArray.push(arr[i])
// }
// console.log(newArray);
