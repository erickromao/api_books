const { Router } = require('express')
const BookController = require('../controllers/BookController')
const bookRouter = Router()

const bookController = new BookController()

bookRouter.post('/', bookController.create)
bookRouter.get('/', bookController.read)
bookRouter.get('/show', bookController.show)
bookRouter.put('/', bookController.update)
bookRouter.delete('/',bookController.delete)

module.exports = bookRouter