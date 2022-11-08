const express = require("express")
router = express.Router()
const classSendMail = require("../services/sendmail.service")
const sendMail = new classSendMail()

router.get("/", (req, res) => {
    res.send("Hello Send Mail")
})

router.post("/", (req, res) => {
    console.log("Entro POST");
    const { body } = req
    console.log(req)
    console.log(body)
    const responseData = sendMail.sendTo(body)
    //'luisantoniosanchezortega44@gmail.com'
    console.log("Response = " + responseData);
    responseData ?
        res.status(201).send("OK")
        :
        res.send("Whops")
})

module.exports = router