var nodemailer = require("nodemailer");
var domain = require("./domain");
var query = require("./query");
var config = require("./config");

var transport = nodemailer.createTransport("SMTP", {
    service: "QQ",
    auth: {
        user: config.sys_email,
        pass: config.sys_email_pwd
    }
});

module.exports = function(req,res,next){
	req.env = {
		domain:domain,
		query:query,
		transport:transport,
		config:config
	}
	next();
}