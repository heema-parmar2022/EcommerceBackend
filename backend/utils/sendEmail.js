const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {

    //const SMPT_HOST= "smtp.gmail.com";
    //const SMPT_PORT= "465";
   // const SMPT_SERVICE= "gmail";
    const SMPT_MAIL= "testing2941193@gmail.com";
   // const SMPT_PASSWORD= "Gateway@2022";
   

  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'testing2941193@gmail.com',
        pass: 'pfcdwbfkanfgtomx'
    }
  });

  const mailOptions = {
    from: SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;