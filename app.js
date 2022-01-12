/* eslint-disable no-undef */
/* eslint-disable max-len */
const express = require('express');
const logger = require('morgan');
const hbs = require('hbs');
// Импортируем созданный в отдельный файлах рутеры.

const app = express();
const PORT = 3005;

const indexRouter = require('./routes/index');
const registrationRouter = require('./routes/registration');
const loginRouter = require('./routes/login');
const profileRouter = require('./routes/profile');

// Сообщаем express, что в качестве шаблонизатора используется "hbs".
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`);

// Сообщаем express, что шаблона шаблонизаторая (вью) находятся в папке "ПапкаПроекта/views".
app.set('views', 'views');

// Подключаем middleware morgan с режимом логирования "dev", чтобы для каждого HTTP-запроса на сервер в консоль выводилась информация об этом запросе.
app.use(logger('dev'));
// Подключаем middleware, которое сообщает epxress, что в папке "ПапкаПроекта/public" будут находится статические файлы, т.е. файлы доступные для скачивания из других приложений.
app.use(express.static('public'));
// Подключаем middleware, которое позволяет читать содержимое body из HTTP-запросов типа POST, PUT и DELETE.
app.use(express.urlencoded({ extended: true }));
// Подключаем middleware, которое позволяет читать переменные JavaScript, сохранённые в формате JSON в body HTTP-запроса.
app.use(express.json());

app.use('/', indexRouter);
app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/profile', profileRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
