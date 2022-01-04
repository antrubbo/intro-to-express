import express from 'express'
const app = express()
import responses from './data.js'

app.get("/", (req, res) => {
    res.send("You're app is up and running")
})

app.get("/magic8", (req, res) => {
    const random = Math.floor(Math.random() * responses.length)
    res.send(`<h1>${responses[random]}</h1>`)
})

app.listen(3000, () => {
    console.log("Listening to changes on port 3000")
})