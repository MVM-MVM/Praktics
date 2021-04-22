/*  Задание на урок1:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: movies: { 'logan': '8.1' }
    Задание на урок2:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';
let numberOfFilms;
do {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '1');
    if (false) {
        console.log(`answer === null  ${numberOfFilms === null}`);             //CANCEL      -> true
        console.log(`answer === ''  ${numberOfFilms === ''}`);                 // ''ok       -> true
        console.log(`isNaN(numberOfFilms)  ${isNaN(+numberOfFilms)}`);  // 'string'ok -> true   
        console.log(`answer  ${numberOfFilms}`);
        console.log(`numberOfFilms  ${+numberOfFilms}`);
    }
    if (numberOfFilms === null) { alert('You push "cancel"! Try again!'); }
    if (numberOfFilms === '') { alert('Empty answer! Try again!'); }
    if (isNaN(+numberOfFilms)) { alert('You answer is not number! Try again!'); }
}
while (numberOfFilms === null || numberOfFilms === '' || isNaN(+numberOfFilms));
console.log(`numberOfFilms  ${+numberOfFilms}`);

const personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.count = +numberOfFilms;

for (let i = 0; i < 2;) {
    let l;
    let n;
    let m;
    while (l) {
        n = prompt('Один из последних просмотренных фильмов?', 'Logan');
        l = testString50max(n);
    }
    do {
        m = prompt(`На сколько оцените фильм ${n}? ot 0 do 10`, '8.1');
        if (m === null) { alert('Cancel answer! Try again!'); continue; }
        else {
            if (isNaN(+m)) { alert('You answer is not number! Try again!'); continue; }
            else {
                if (0 > (+m) || (+m) > 10) { alert("Answer must by from 0 to 10! Try again!"); continue; }
                else {
                    i++;
                    break;
                }
            }
        }
    }
    while (true);
    personalMovieDB.movies[n] = +m;
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10) { alert("Просмотрено довольно мало фильмов"); }
else {
    if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) { alert("Вы классический зритель"); }
    else {
        if (personalMovieDB.count > 30) { alert("Вы киноман"); }
        else { alert("Произошла ошибка"); }
    }
}

function testString50max(n) {
    if (n === null) { alert("Cancel answer!"); console.log('errr'); return false; }
    else {
        if (n.length < 1) { alert("Empty answer!"); return false; }
        else {
            if (n.length > 50) { alert("Too long answer!"); return false; }
            else {
                return true;
            }
        }
    }


}

function testNumber(str) {


}

/*
if (256) {
    console.log("yes");
}
else {
    console.log("no");
}
console.log('first');

const a = 12;
(a === 12) ? console.log('first') : console.log('second');
*/

let str = 'testtesttesttest';
console.log(str.indexOf('tt'));

const options = {
    name: 'default',
    data: 'DATA',
    format1: {
        color: 'Red',
        bd: 'dsd17',
        style: {
            lang: 'ru',
            mass: 321
        }
    },
    ConF: '133jdk',
    massa: 123,
    format2: {
        color: 'Red',
        bd: 'dsd17',
        style: {
            lang: 'ru',
            mass: 321
        }
    },
};
console.log(Object.keys(options).length);
//console.log(typeof (options['ConF']));
testObject1(options, 0);

function testObject1(obj, lay) {
let layer = lay;  
    for (let i in obj) {

        if (typeof (obj[i]) === "object") {
            lay++;
            testObject1(obj[i], lay);
             
        }
        else {
            console.log(`\t PropObj ${lay}: \t ${i}      \t has the meaning: ${obj[i]}`);
        }
    }
}


const arr = [1,2,13,4,15,6,7,18,9,10,11];
arr[20]=0;
// console.log(arr);
// arr.sort();
// console.log(arr);
arr.sort(compNum);
console.log(arr);

function compNum(a,b){
    let z = a-b, x;
    if (z>0) {x = ">";}    if (z<0) {x = "<";}    if (z==0) {x = "o";}
    console.log(`B = ${b},   \tA = ${a},   \tX = ${x}`);
    return z;
}