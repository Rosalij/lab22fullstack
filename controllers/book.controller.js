'use strict';
const Book = require('./models/book');

const getAllBooks = async (request, h) => {
    try {
        const book = await Book.find();
        return h.response(book).code(200);
    } catch (err) {
        return h.response({ error: err.message }).code(500);
    }
};

// POST a new product
const addBook = async (request, h) => {
    try {
        const newBook = new Book(request.payload);
        const saved = await newBook.save();
        return h.response(saved).code(201);
    } catch (err) {
        return h.response({ error: err.message }).code(500);
    }
};


//delete book by id
const deleteBook = async (request, h) => {
    try {
        const deleted = await Book.findByIdAndDelete(request.params.id);
        if (!deleted) {
            return h.response({ error: 'Book not found' }).code(404);
        }
        return h.response(deleted).code(200);
    } catch (err) {
        return h.response({ error: err.message }).code(500);
    }
}

//update book by id
const updateBook = async (request, h) => {
    try {
        const updated = await Book.findByIdAndUpdate(request.params.id, request.payload, { new: true });
        if (!updated) {
            return h.response({ error: 'Book not found' }).code(404);
        }
        return h.response(updated).code(200);
    } catch (err) {
        return h.response({ error: err.message }).code(500);
    }
}

//get book by id
const getBookById = async (request, h) => {
    try {
        const book = await Book.findById(request.params.id);
        if (!book) {
            return h.response({ error: 'Book not found' }).code(404);
        }
        return h.response(book).code(200);
    } catch (err) {
        return h.response({ error: err.message }).code(500);
    }
}

module.exports = {
        getAllBooks,
        addBook,
        deleteBook,
        updateBook,
        getBookById
    };