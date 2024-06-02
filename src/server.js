require('express-async-errors')
const AppError = require('./utils/AppError')
const createDB = require('./database')
const express = require('express')
const router = require('./routes')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

createDB()

app.use(express.json())
app.use(router)

app.use((error, request, response, next)=>{
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            message:error.message
        })
    }
    console.error(error)

    return response.status(500).send('Server Error')
})

app.listen(PORT, ()=> console.log(`ServerOn [ ${PORT} ]`))

