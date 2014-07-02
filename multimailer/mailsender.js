var sendMultiMails=function(smtpService){
    var nodemailer = require("nodemailer");
    var smtpTransport = nodemailer.createTransport("SMTP", smtpService);

    this.sendMails=function(mailOptions) {
        smtpTransport.sendMail(mailOptions, function (error, response) {
            if (error) {
                console.log(error);
            } else {
                console.log("Message sent: " + response.message);
            }
        });
    }
}

module.exports=sendMultiMails;
