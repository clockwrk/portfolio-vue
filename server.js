const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser');
const mime = require('mime');
const fs = require('fs');

require('dotenv').config();

console.log('user', process.env.GMAIL_USER);
console.log('pass', process.env.GMAIL_PASS);

app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

app.post('/send-email', function(req, res) {
    console.log('send-mail')

    console.log("/send-email route", req.body);

    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    });

    let mailOptions = {
        from: req.body.email,
        to: process.env.GMAIL_USER +"@gmail.com",
        subject: 'New message from contact form at jose-renteria.com',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
      };

    transporter.sendMail(mailOptions, (error, info) => {

        console.log('mailoptions', mailOptions);

        if (error) {
            console.log(error);
            res.send('contact-failure');
        }else{
        console.log('Message %s sent: %s', info.messageId, info.response);
            res.send('contact-success')
        }
    });
});

app.get('/resume', function(req, res){
    let file = path.join(__dirname, './src/assets/Jose_Renteria_Resume.doc');
    res.download(file);
});



const port = process.env.PORT || 5000;
app.listen(port);

console.log('server started !' + port);
