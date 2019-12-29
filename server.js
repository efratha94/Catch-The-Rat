const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const path = require("path")
const PORT = 3009

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, "node_modules")))
app.use(express.static(path.join(__dirname, "dist")))


app.listen(process.env.PORT || PORT, function(){
    console.log("Listening on port "+ PORT)
})