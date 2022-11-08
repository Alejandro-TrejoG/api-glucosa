// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token in Account Info
// and set the environment variables. See http://twil.io/secure
// const accountSid = 'AC87dd522ce238b0da059304b777c523bf'; // Your Account SID from www.twilio.com/console
// const authToken = 'cf144e6fb4539d9540f57353dcbef74e'; // Your Auth Token from www.twilio.com/console

// const twilio = require('twilio');
// const client = new twilio(accountSid, authToken);

// client.messages
//     .create({
//         body: 'Hola Twilio desde Node',
//         to: '+527731853217', // Text this number
//         from: '+16802195195', // From a valid Twilio number
//     })
//     .then((message) => console.log(message.sid));


// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript

const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
const PORT = process.env.PORT || 3030

const routerAPI = require("./routes/index")

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello there ")
})

app.post("/", (req, res) => {
    console.log(req.body);
    const body = req.body
    res.json(body)
})

routerAPI(app)

app.listen(PORT, () => {
    console.log("escuchando por puerto => " + PORT);
})