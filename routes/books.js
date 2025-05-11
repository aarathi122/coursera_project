import express from 'express';
import {
    addReview,
    deleteReview,
    getBookByISBN,
    getBooks,
    getBooksByAuthor,
    getBooksByTitle,
    getReview
} from '../controllers/booksController.js';

const router = express.Router();

router.get('/', getBooks); // Task 1
router.get('/isbn/:isbn', getBookByISBN); // Task 2
router.get('/author/:author', getBooksByAuthor); // Task 3
router.get('/title/:title', getBooksByTitle); // Task 4
router.get('/review/:isbn', getReview); // Task 5
router.put('/review/:isbn', addReview); // Task 8
router.delete('/review/:isbn', deleteReview); // Task 9

export default router;
