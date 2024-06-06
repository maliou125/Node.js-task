const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'maliou@gmail.com', 
        pass: '*******' 
    }
});

const mailOptions = {
    from: 'your-email@gmail.com', 
    to: 'your-email@gmail.com', 
    subject: 'Test Email from Node.js',
    text: 'Hello this is maliou'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});