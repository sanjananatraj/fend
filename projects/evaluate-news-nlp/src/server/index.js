const dotenv = require('dotenv')
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require('node-fetch');

// Start up an instance of app
const app = express()
app.use(cors())
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('dist'))

//API Info
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY
let userData = [];

//POST
app.post('/all', async function(req, res) {
    userData = req.body.url;
    const apiURL = `${baseURL}key=${apiKey}&url=${userData}&lang=en`
    const apiRes = await fetch(apiURL)
    const apiData = await apiRes.json()
    res.send(apiData)

})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(5000, function () {
    console.log('Example app listening on port 5000!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})