import express from "express"

import books from "./booksRoutes.js"
import authors from './authorsRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({message: "Ok"})
    })

    app.use(express.json(), books)
    app.use(express.json(), authors)
}

export default routes
