const express = require("express");

const booksRouter= express.Router();
function router(nav){
    var books = [
    {
        title: 'tom and jerry',
        author: 'Benjamin Bird ',
        genre: 'comic',
        image: 'tom.jpg'
    },
    {
        title: 'the alchemist',
        author: 'Paulo Choelo',
        genre: 'drama',
        image: 'alchemist.jpg'
    },
    {
        title: 'a walk to remeber',
        author: 'Nicolas Sparks',
        genre: 'romance',
        image: 'walk.jpg'
    }

];
booksRouter.get('/',function(req,res){
    res.render("src/views/books",
    {
        nav,
        title:'library',
        books

    })
});

booksRouter.get('/:id',function(req,res){
    const id = req.params.id;
   
    res.render("src/views/book",
    {  
      nav ,
    title :'library',
    book: books[id]
    })
    
});

return booksRouter;
}
module.exports = router;