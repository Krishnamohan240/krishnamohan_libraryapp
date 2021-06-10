const { request } = require("express");
const express = require("express");

const nav= [
    {link:'/books',name:'books'},
    {link:'/authors',name:'authors'},
    {link:'/sign_up',name:'SIGN UP'},
    {link:'/login',name:'LOG IN'}

  ];
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorRouter = require('./src/routes/authorsRoutes')(nav);
const app = new express(); 
app.use(express.static('./public'));
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.set('view engine','ejs');
app.set('views','./src/views');
app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'library'

    })
});


app.get('/sign_up',function(req,res){
    res.render("sign_up",
    {
        nav,
        title:'library'

    })
});

app.get('/login',function(req,res){
    res.render("login",
    {
        nav,
        title:'library'

    })
});

app.listen(5001);