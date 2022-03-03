const express = require("express")
const app = express()
const axios = require("axios")

app.use("/public", express.static(__dirname + "/public"))




app.listen(80)