const express = require('express')
const { connection } = require('mongoose')
const notesRoutes = require('./routes/notes')
const cors = require('cors')

const PORT = 8080
const app = express()

app.use(cors())
app.use(express.json())
app.use('/notes', notesRoutes)

app.get('/',(req,res)=>{
    res.status(200).send('welcome Page')
})

app.listen(PORT, async()=>{
    try {
        await connection
        console.log(`note is running on Port ${PORT}`)
    } catch (error) {
        console.log('Filed to connect to Database',error.message)
    }
})