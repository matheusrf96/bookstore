import authors from "../models/Author.js"

class AuthorController {

    static getAuthors = (req, res) => {
        authors.find((err, authors) => {
            res.status(200).json(authors)
        })
    }

    static getAuthorById = (req, res) => {
        const id = req.params.id

        authors.findById(id, (err, author) => {
            if (err) {
                res.status(400).send({message: `${err.message} - ID not found`})
                return
            }

            res.status(200).send(author)
        })
    }

    static registerAuthor = (req, res) => {
        let author = new authors(req.body)

        author.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - failed to register author`})
                return
            }

            res.status(201).send(author.toJSON())
        })
    }

    static updateAuthor = (req, res) => {
        const id = req.params.id

        authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - failed to update author`})
                return
            }

            res.status(200).send({message: `author "${id}" was updated`})
        })
    }

    static removeAuthor = (req, res) => {
        const id = req.params.id

        authors.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message:  `${err.message} - failed to delete author`})
                return
            }

            res.status(200).send({message: `author "${id}" was deleted`})
        })
    }
}

export default AuthorController
