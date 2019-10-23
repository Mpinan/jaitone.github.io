'use strict';
const nodemailer = require('nodemailer');

    // create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mgpinan1990@gmail.com',
        pass: 'Llatrese34'
    }
});

let mail = document.getElementById(mail)

let paragraph = document.getElementById(text) 
    // send mail with defined transport object
    
let mailOptions = {
        from: mail,
        to: user,
        text: paragraph
    };

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    };
}); 