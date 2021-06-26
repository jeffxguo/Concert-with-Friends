const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.send("live")
})

app.listen(3001)