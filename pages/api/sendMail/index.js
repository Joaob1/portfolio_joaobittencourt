require("dotenv").config();
const nodemailer = require("nodemailer");
const transport = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    service: "outlook",
    port: 587,
    secure: false,
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
})
export default async function SendMail(req, res) {
    const body = JSON.parse(req.body)
    const { nome, sobrenome, email, mensagem } = body;
    transport.sendMail({
        from: `${nome}" "${sobrenome}`,
        to: process.env.AUTH_EMAIL,
        subject: "Portfolio João Bittencourt",
        html: `<h1>Olá, João!</h1><h2>${email} te enviou a seguinte mensagem: </h2><br><strong>${mensagem}</strong>`,
        text: `${nome} " " ${sobrenome} te enviou uma mensagem!`
    }).then((response) => {
        return res.status(200).json({ "mensagem": response })
    }).catch((error) => {
        return res.status(500).json({ "mensagem": error })
    })
}