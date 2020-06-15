const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ydbeis@gmail.com',
        subject: 'Thanks for Joining!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ydbeis@gmail.com',
        subject: 'Sorry to see you go! :(',
        text: `Hey, ${name}, we are sorry to see you go. Please let us know if there is anything we can do better next time.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail,

}