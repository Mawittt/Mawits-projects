const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const path = require("path")

app.use(express.static(path.join(__dirname,"public")))

app.get("/project1", (req, res) => {
    res.sendFile(path.join(__dirname+"/public/index.html")) 
})

app.get("/",(req,res)=>{
    res.send("Hello World")
}
)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))