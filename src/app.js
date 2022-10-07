import express from 'express'

const app = express()

app.use(express.json())

const books = [
    {id: 1, title: 'Test'},
    {id: 2, title: 'Oh no'},
]

app.get('/', (req, res) => {
    res.status(200).send('Node bookstore')
})

app.get('/books', (req, res) => {
    res.status(200).json(books)
})

app.get('/books/:id', (req, res) => {
    let index = searchBook(req.params.id)
    res.json(books[index])
})


app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).send('The book was registered')
})

app.put('/books/:id', (req, res) => {
    let index = searchBook(req.params.id)
    books[index].title = req.body.title

    res.json(books)
})

function searchBook(id) {
    return books.findIndex(book => book.id === parseInt(id))
}

export default app
