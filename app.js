const express = require('express');
const morgan  = require('morgan');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);
app.use(morgan('dev'));
app.use(express.static('public'))

//app.use((req, res, next) => {
//    console.log('new request made');
//    console.log('host:', req.hostname);
//    console.log('path', req.path);
//    console.log('method', req.method);
//    next();
//});

//app.use((req, res, next) => {
//    console.log('In the next middleware');
//    next();
//});

const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];

app.get('/', (req, res) => {
    //res.send('<p>home page</p>');
    //res.sendFile('./views/index.html', {root: __dirname});
    res.render('index', { title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    //res.send('<p>about page</p>');
    //res.sendFile('./views/about.html', {root: __dirname});
    res.render('about',{title: 'About'});
});

//redirects
//app.get('/about-us', (req, res) => {
//    res.redirect('/about');
//})

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'House'});
});

//404 page
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404', {title: '404'});
});


