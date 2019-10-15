//expresss
const express = require("express")
var bodyParser = require("body-parser")
const app = express()
const port = 3000

const quotes = ["All that we are is the result of what we have thought.", "I have no special talent. I am only passionately curious.","If you judge people, you have no time to love them.", "Wisely, and slow. They stumble that run fast.","The most courageous act is still to think for yourself. Aloud.","Stay hungry, stay foolish.","A great man is always willing to be little.","The greatest wealth is to live content with little.","The future belongs to those who prepare for it today.","It always seems impossible until it’s done."];

//app.get('/', (req, res) => res.send("quotes[Math.floor(Math.random()*10)]"));

app.post('/', function (req, res) {
    res.send(quotes[Math.floor(Math.random()*10)])

  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))