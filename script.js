/* Задание на урок:

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
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const   a = prompt('Один из последних просмотренных фильмов?',''),
//         b = prompt('На сколько оцените его?',''),
//         c = prompt('Один из последних просмотренных фильмов?',''),
//         d = prompt('На сколько оцените его?','');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if (4==4) {
//     console.log('Ok!');
// } else {
//     cons ole.log('Error');
// };

//const num = '50';

// if (num < 49) {
//     console.log('Error');   
// } else if (num > 100) {
//     console.log('Много');    
// } else {
//     console.log('ОК!');
// };

// switch (num) {
//     case '49':
//         console.log('Error');
//         break;
//     case '100':
//         console.log('Error2');
//         break;
//     case '50':
//         console.log('Yes!');
//         break;
//     default:
//         break;
// }

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;

// };

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }

// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         break;   
//     }
//     console.log(i);
// }

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function LastMovieWatched(NameFilm) {
    if (NameFilm == '' || NameFilm.length > 50) {
        (NameFilm.length > 50) ? console.log('Наименование длиннее нормы') : console.log('Наименование пустое!');
        return LastMovieWatched(prompt('Один из последних просмотренных фильмов?',''));   
    } else {
        return NameFilm;   
    }
}

function MovieRating(RatingFilm) {
    if (RatingFilm == '') {
        return MovieRating(prompt('На сколько оцените его?',''));   
    } else {
        return RatingFilm;   
    }
}

for (let index = 1; index <= 3; index++) {
    let Film = '', Rating =''; 
    Film = LastMovieWatched('');
    Rating = MovieRating('');
    personalMovieDB.movies[Film] = Rating;   
     
}

if (numberOfFilms < 10) {
        console.log('Вы смотрите довольно мало фильмов!');
}

// const   a = prompt('Один из последних просмотренных фильмов?',''),
//         b = prompt('На сколько оцените его?',''),
//         c = prompt('Один из последних просмотренных фильмов?',''),
//         d = prompt('На сколько оцените его?','');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

console.log(personalMovieDB);