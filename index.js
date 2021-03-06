const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();
const SENDGRID_APIKEY = process.env.SENDGRID_APIKEY;
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_APIKEY);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


// specify client side routing..
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))


app.get('/',(req,res)=>{

        res.send('contact');
        console.log(process.env.SENDGRID_APIKEY);
    

})
app.get('/contact',(req,res)=>{

    res.send('contact');
    console.log(process.env.SENDGRID_APIKEY);


})
app.post('/api/form',(req,res)=>{

        console.log(req.body);
        console.log(123);
        const output = `
    <p> You have a new Volunteer Request</p>
        <h3> Contact Details </h3>
        <ul>
            <li> Name : ${req.body.name}</li>
            <li> Interest : ${req.body.interest}</li>
            <li> Email : ${req.body.email}</li>
            <li> Email : ${req.body.phone}</li>
            <li> Email : ${req.body.message}</li>
        </ul>
    `;
    const msg = {
        to: 'mithilesh.tarkar@gmail.com',
        from: 'mythilmeshram@gmail.com',
        subject: 'New Volunteer Request',
        text: 'You have a new volunteer request',
        html: output
      };
      sgMail.send(msg)
      .then((msg)=>console.log('Messege Sent by SendGrid'));

     // create reusable transporter object using the default SMTP transport
     let transporter = nodemailer.createTransport({

        //host: 'smtp.ethereal.email',
         //host: 'mail.google.com',
         host :'pop3.live.com',
         service : 'outlook',
         port: 587,
         secure: false, // true for 465, false for other ports
         auth: {
             user: 'mythilmeshram@outlook.com', // generated ethereal user
             pass: '' // generated ethereal password
             //
         },
         tls:{

                rejectUnauthorized:false
         }

     });

     // setup email data with unicode symbols
    let mailOptions = {
        from: '"Mithilesh" <mythilmeshram@outlook.com>', // sender address
        to: 'mithilesh.tarkar@gmail.com', // list of receivers
        subject: 'Teach for India - Volunteer Request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

     // send mail with defined transport object
     transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
      // res.send('Hello');
    res.send('contact',{msg:'Email has been sent.'});


})

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{

    console.log('Server listening on port ${PORT}');

});