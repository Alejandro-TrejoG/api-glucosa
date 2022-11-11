const mailHtml = require("../templates/MailTemplate/mail");
const sgMail = require('@sendgrid/mail')


class SendMail {

    sendTo(objInfo) {
        sgMail.setApiKey(process.env.SENDGRID_APY_KEY)
        const msg = {
            to: objInfo.correo, // Change to your recipient
            from: 'trejoga48h@gmail.com', // Change to your verified sender
            subject: 'Hey, este es el estado de tu glucosa',
            text: 'and easy to do anywhere, even with Node.js',
            html: mailHtml(objInfo.nombre, objInfo.tipoMuestra, objInfo.concentracion),
            //            nombre, tipoMuestra, concentracion
        }
        const msgSend = sgMail
            .send(msg)
            .then(() => {
                console.log('Email sent')
                return true
            })
            .catch((error) => {
                console.error(error)
                return false
            })
        return msgSend
    }

}

module.exports = SendMail