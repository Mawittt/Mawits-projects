const express = require("express")
const app = express()
const port = process.env.PORT || 5000

app.use

app.get("/page", (req, res) => {
    res.send("becky is a developer now") 
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))