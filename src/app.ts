import express, { json } from "express"

const app = express()

app.use(json())

app.get("/", (req, res) => {
    res.send("Hello world!")
})

export { app }