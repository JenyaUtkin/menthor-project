const createError = require('http-errors');
const express = require('express');
const path = require('path');

const logger = require('morgan');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const FileStore = require('session-file-store')(session);

const hbs = require('hbs');
const indexRouter = require('./routes/indexRouter');
const usersRouter = require('./routes/userRouter');
const myProfilRouter = require('./routes/myProfilRouter');
const tagsRouter = require('./routes/tagsRouter');
const searchRouter = require('./routes/searchRouter');

hbs.registerPartials(path.join(process.env.PWD, 'views', 'partials'));
const app = express();

const { PORT } = process.env;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(cookieParser());
app.use(
  session({
    store: new FileStore(),
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
    name: 'myAuth',
  })
);

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/profil', myProfilRouter);
app.use('/cabinet',tagsRouter);
app.use('/search', searchRouter);
app.listen(PORT, () => {
  console.log('Server start ====>>>', PORT);
});
