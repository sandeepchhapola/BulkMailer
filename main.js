var sendBulkMail = require("./multimailer/mailsender");
var async=require("async");

var mailOptions = {}
var task = [];
var users=["sandeep.kumar@intelligrape.com","sandeep.kumar@intelligrape.com","sandeep.kumar@intelligrape.com","vineeta.sharma@intelligrape.com","rishabh.dixit@intelligrape.com","deepakv@intelligrape.com"];

var smtpService = {
    service: "Gmail",
    auth: {
        user: "userName@domainName.com",
        pass: "userPassword"
    }
}
var bulkmailer = new sendBulkMail(smtpService);

for (i in users) {
    mailOptions = {
        from: "sandeep.chhapola@intelligrape.com",
        to:users[i].toString(),
        subject: "Hello",
        text: "hi",
        html: "<b>Hello kya haal h ✔</b>"
    }
    task.push(bulkmailer.sendMails(mailOptions));
}

async.parallel(task,function(err){
   if(err)
    console.log(err);
});