import express from 'express'

import db from './config/dbConnect.js'
import books from './models/Book.js'
import routes from './routes/index.js'

db.on("error", console.log.bind(console, 'Connection error'))
db.once("open", () => console.log('DB connected successfully'))

const app = express()

app.use(express.json())

routes(app)

app.get('/books/:id', (req, res) => {
    let index = searchBook(req.params.id)
    res.json(books[index])
})

app.put('/books/:id', (req, res) => {
    let index = searchBook(req.params.id)
    books[index].title = req.body.title

    res.json(books)
})

app.delete('/books/:id', (req, res) => {
    let { id } = req.params
    let index = searchBook(id)
    books.splice(index, 1)

    res.send(`Book ${id} removed successfully`)
})

function searchBook(id) {
    return books.findIndex(book => book.id === parseInt(id))
}

export default app
