import express from 'express'

const app = express()

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

export default app
