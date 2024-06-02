const { Router } = require('express')
const bookRouter = require('./books.routes')
const router = Router()

router.use("/book", bookRouter)

module.exports = router