// variables
const express = require("express")
const cors = require("cors")
const { MONGODBURI } = require("./keys")
const PORT = process.env.PORT || 8000
const mangoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(cors())


// configs
mangoose.connect(MONGODBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const objectSchema = new mangoose.Schema({
    name: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true,
        unique: true
    },
    hash: {
        type: String,
        require: true,
        unique: true
    }
})

mangoose.model('ImageObj', objectSchema )

// functions
app.get('/', (req, res)=> {
    res.send("get method")
})

app.post('/', (req, res)=> {
    res.send("post method")
})

app.listen(PORT, () => {
    console.log("Server started")
})