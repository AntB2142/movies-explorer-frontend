# Movies Explorer-SPA приложение в котором можно найти фильмы по запросу и сохранить в личном кабинете.
[https://movies-explorer-antb.nomoredomains.club](https://movies-explorer-antb.nomoredomains.club)

![React](https://img.shields.io/badge/-React-61daf8?logo=react&logoColor=black)
![HTML5](https://img.shields.io/badge/-HTML5-e34f26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572b6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-f7df1e?logo=javaScript&logoColor=black)
![Webpack](https://img.shields.io/badge/-Webpack-99d6f8?logo=webpack&logoColor=black)
![API](https://img.shields.io/badge/-api-yellow)
![BEM](https://img.shields.io/badge/-BEM-yellowgreen)

## Задача
* Сделать адаптивную верстку
* Настроить и защитить роуты
* Получить данные по API, обработать и отрендерить
* Валидировать формы

## Логика
* При авторизации уходят GET запросы за данными о сохраненных фильмах и информации о пользователе.
* Клик по кнопке Найти отправляет GET запрос за данными на сервер. Данные записываются в LS — далее поиск фильмов происходит в LS.
* На роуте /movies, клик на иконке закладки добавляет фильм на страницу Сохраненные фильмы — по клику на иконку уходит POST запрос, данные сохраняются на сервере.
* На роуте /saved-movies, клик по крестику удаляет фильм из сохраненных.
* Реализован фильтр по короткометражным фильмам длительностью до 40 минут.
* На роуте /movies в зависимости от разрешения экрана рендерится разное количество карточек.
* Добавлен и настроен прелоудер.
* Можно редактировать профиль пользователя — обновленные данные сохраняются на сервере.
* При логауте  очищается LS и удаляются все стейты.
git push origin
[Код бэкенд части приложения](https://github.com/AntB2142/movies-explorer-api)
# Макет
[https://www.figma.com/file/ktXAkoqgxFRTp5tcYy97J6/Diploma-(Copy)?node-id=932%3A3377](https://www.figma.com/file/ktXAkoqgxFRTp5tcYy97J6/Diploma-(Copy)?node-id=932%3A3377)

## Установка
Для запуска на локальной машине необходимо:</br>
1. Установить npm зависимости:</br>
```sh
npm install
```
2. Запустить в режиме разработки:</br>
```sh
npm run start
```
Если все прошло успешно, проект будет запущен на `http://localhost:3000`