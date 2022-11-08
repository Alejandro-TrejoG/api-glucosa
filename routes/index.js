const express = require("express")
const router = express.Router()
const routerSendMail = require("./sendmail.route")

const routerAPI = app => {

    app.use("/api", router)
    router.use("/send-mail", routerSendMail)
}

module.exports = routerAPI
