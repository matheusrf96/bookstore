import express from "express"
import BookController from "../controllers/booksController.js"

const router = express.Router()

router
    .get("/books", BookController.getBooks)
    .get("/books/search", BookController.getBookByPublisher)
    .get("/books/:id", BookController.getBookById)
    .post("/books", BookController.registerBook)
    .put("/books/:id", BookController.updateBook)
    .delete("/books/:id", BookController.removeBook)

export default router
