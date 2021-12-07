const express = require("express")
const app = express()

const magic8Responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - Definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, and signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
]

app.get("/", (req, res) => {
    res.send("You're app is up and running")
})

app.get("/magic8", (req, res) => {
    const random = Math.floor(Math.random() * magic8Responses.length)
    res.send(`<h1>${magic8Responses[random]}</h1>`)
})

app.listen(3000, () => {
    console.log("Listening to changes on port 3000")
})