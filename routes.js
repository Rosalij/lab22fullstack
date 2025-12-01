'use strict';

const { getAllBooks, addBook, deleteBook, updateBook, getBookById } = require('./controllers/book.controller');
module.exports = (server) => {

    //get all books
 server.route({
    method: 'GET',
    path: '/books',
    handler: getAllBooks
});

    //add book
     server.route({
        method: 'POST',
        path: '/books',
        handler: addBook
    });

    //delete book
    server.route({
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBook
    });

    //update book
    server.route({
        method: 'PUT',
        path:   '/books/{id}',
        handler: updateBook
    });

    //get book by id
    server.route({
        method: 'GET',
        path:   '/books/{id}',
        handler: getBookById
    });

}
