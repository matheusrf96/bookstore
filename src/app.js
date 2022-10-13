import express from 'express'

import db from './config/dbConnect.js'
import books from './models/Book.js'
import routes from './routes/index.js'

db.on("error", console.log.bind(console, 'Connection error'))
db.once("open", () => console.log('DB connected successfully'))

const app = express()

app.use(express.json())

routes(app)

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
