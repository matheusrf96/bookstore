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

app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).send('The book was registered')
})

export default app
