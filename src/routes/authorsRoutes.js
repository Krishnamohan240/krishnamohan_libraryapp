const express = require("express");

const authorRouter= express.Router();
function router(nav){
    var authors = [
    {
        title: 'Benjamin Bird',
        image: 'ben.jpg'
    },
    {
        title: 'Paulo Choelo',
        image: 'paulo.jpg'
    },
    {
        title: 'Nicolas Sparks',
        image: 'nic.jpg'
    }

];
authorRouter.get('/',function(req,res){
    res.render("src/views/authors",
    {
        nav,
        title:'library',
        authors

    })
});

authorRouter.get('/:id1',function(req,res){
    const id1 = req.params.id1;
    res.render("src/views/author",
    {
        nav,
        title:'library',
        author: authors[id1]
      
    })  

});



return authorRouter;
}
module.exports = router;