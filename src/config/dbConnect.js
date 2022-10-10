import mongoose from "mongoose"
import conf from './conf.js'

mongoose.connect(`mongodb+srv://root:${ conf.DB_PASSWORD }@cluster0.fp8vgrw.mongodb.net/bookstore`)

let db = mongoose.connection

export default db