const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const path = require("path")
const port = 3009

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, "node_modules")))
app.use(express.static(path.join(__dirname, "dist")))


app.listen(port, function(){
    console.log("Listening on port "+port)
})