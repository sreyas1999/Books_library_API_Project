const express = require("express");
//Database
const database = require("./database");


//initialising express

const booky = express();

/*
Route            /
Description      Get all the books
Access           PUBLIC
Parameter        NONE
Methods          GET
*/

booky.get("/",(req,res) => {
  return res.json({books: database.books});
});

/*
Route            /is
Description      Get specific book on ISBN
Access           PUBLIC
Parameter        isbn
Methods          GET
*/

booky.get("/is/:isbn",(req,res) => {
  const getSpecificBook = database.books.filter(
    (book) => book.ISBN === req.params.isbn
  );

  if(getSpecificBook.length ===0) {
    return res.json({error: `No book found for the ISBN of ${req.params.isbn}`})
  }

  return res.json({book: getSpecificBook});
});

/*
Route            /l
Description      Get specific book on ISBN
Access           PUBLIC
Parameter        language
Methods          GET
*/

booky.get("/l/:language",(req,res) => {
  const getSpecificBook = database.books.filter(
    (book) => book.language === req.params.language
  );

  if(getSpecificBook.length === 0) {
    return res.json({error: `No book found for the category of ${req.params.language}`})
  }

  return res.json({book: getSpecificBook});
});



/*
Route            /c
Description      Get specific book on catagory
Access           PUBLIC
Parameter        category
Methods          GET
*/
booky.get("/c/:category",(req,res) => {
  const getSpecificBook = database.books.filter(
    (book) => book.category.includes(req.params.category)
  );

  if(getSpecificBook.length === 0) {
    return res.json({error: `No book found for the category of ${req.params.catagory}`})
  }

  return res.json({book: getSpecificBook});
});


/*
Route            /author
Description      Get all authors
Access           PUBLIC
Parameter        NONE
Methods          GET
*/
booky.get("/author", (req,res) => {
  return res.json({authors: database.author});
});

/*
Route            /author/book
Description      Get all authors based on books
Access           PUBLIC
Parameter        isbn
Methods          GET
*/
booky.get("/author/book/:isbn", (req,res) => {
  const getSpecificBook = database.author.filter(
    (author) => author.books.includes(req.params.isbn)
  );

  if(getSpecificBook.length ===0) {
    return res.json({error: `No book found for the book of ${req.params.isbn}`})
  }

  return res.json({book: getSpecificBook});
});

/*
Route            /author
Description      Get all authors based on books
Access           PUBLIC
Parameter        name
Methods          GET
*/

booky.get("/author/:name",(req,res) => {
  const getSpecificBook = database.author.filter(
    (author) => author.name.includes(req.params.name)
  );

  if(getSpecificBook.length ===0) {
    return res.json({error: `No book found for the book of ${req.params.name}`})
  }

  return res.json({book: getSpecificBook});
});



/*
Route            /publications
Description      Get all authors based on books
Access           PUBLIC
Parameter        NONE
Methods          GET
*/
booky.get("/publications",(req,res) => {
  return res.json({publications: database.publication})
});


/*
Route            /publications
Description      Get all authors based on books
Access           PUBLIC
Parameter        name
Methods          GET
*/

booky.get("/publications/:name",(req,res) => {
  const getSpecificBook = database.publication.filter(
    (publications) => publications.name.includes(req.params.name)
  );

  if(getSpecificBook.length ===0) {
    return res.json({error: `No book found for the book of ${req.params.name}`})
  }

  return res.json({book: getSpecificBook});
});


/*
Route            /publications/book
Description      Get all authors based on books
Access           PUBLIC
Parameter        isbn
Methods          GET
*/

booky.get("/publications/book/:isbn", (req,res) => {
  const getSpecificBook = database.publication.filter(
    (publications) => publications.books.includes(req.params.isbn)
  );

  if(getSpecificBook.length ===0) {
    return res.json({error: `No book found for the book of ${req.params.isbn}`})
  }

  return res.json({book: getSpecificBook});
});



booky.listen(3000,() => {
  console.log("Server is up and running");
});
