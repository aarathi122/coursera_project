import { books } from '../data/books.js';

export const getBooks = (req, res) => {
    res.json(books);
};

export const getBookByISBN = (req, res) => {
    const book = books[req.params.isbn];
    res.json(book || { error: "Not found" });
};

export const getBooksByAuthor = (req, res) => {
    const result = Object.values(books).filter(b => b.author === req.params.author);
    res.json(result);
};

export const getBooksByTitle = (req, res) => {
    const result = Object.values(books).filter(b => b.title === req.params.title);
    res.json(result);
};

export const getReview = (req, res) => {
    const book = books[req.params.isbn];
    res.json(book?.review || {});
};

export const addReview = (req, res) => {
    const { user, review } = req.body;
    const book = books[req.params.isbn];
    if (book) {
        book.review[user] = review;
        res.json({ message: "Review added/modified" });
    } else {
        res.status(404).json({ error: "Book not found" });
    }
};

export const deleteReview = (req, res) => {
    const { user } = req.body;
    const book = books[req.params.isbn];
    if (book?.review[user]) {
        delete book.review[user];
        res.json({ message: "Review deleted" });
    } else {
        res.status(404).json({ error: "Review not found" });
    }
};
