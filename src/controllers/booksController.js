import books from "../models/Book.js"

class BookController {

    static getBooks = (req, res) => {
        books.find()
            .populate('author')
            .exec((_, books) => {
                res.status(200).json(books)
            })
    }

    static getBookById = (req, res) => {
        const id = req.params.id

        books.findById(id)
            .populate('author', 'name')
            .exec((err, book) => {
                if (err) {
                    res.status(400).send({message: `${err.message} - ID not found`})
                    return
                }

                res.status(200).send(book)
            })
    }

    static getBookByPublisher = (req, res) => {
        const publishingCompany = req.query.publishing

        books.find({'publishing': publishingCompany }, {}, (_, book) => {
            res.status(200).send(book)
        })
    }

    static registerBook = (req, res) => {
        let book = new books(req.body)

        book.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - failed to register book`})
                return
            }

            res.status(201).send(book.toJSON())
        })
    }

    static updateBook = (req, res) => {
        const id = req.params.id

        books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - failed to update book`})
                return
            }

            res.status(200).send({message: `Book "${id}" was updated`})
        })
    }

    static removeBook = (req, res) => {
        const id = req.params.id

        books.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message:  `${err.message} - failed to delete book`})
                return
            }

            res.status(200).send({message: `Book "${id}" was deleted`})
        })
    }
}

export default BookController
