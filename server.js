require('dotenv').config()
const express = require('express')

const port = process.env.PORT
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/flashcards',require('./api/flashcards/flashcards.js'))


app.get('/', (req, res) => {
    res.status(201).send(`<h1>Welcome to FlashBrain.ai API<h1>`)
})




app.listen(port, ()=> {
    console.log(`listening on ${port}`)
})
