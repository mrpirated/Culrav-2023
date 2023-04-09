import dbg from "debug";
const debug = dbg("controller:sendEmail");
const { EmailClient } = require("@azure/communication-email");
import config from "../config";
const sendEmail = (data) => {
	const { subject, body, receivers } = data;
	const connectionString = config.AZURE_EMAIL_CONNECTION_STRING;
	const emailClient = new EmailClient(connectionString);
	const message = {
		senderAddress: "<no-reply@culrav.online>",
		content: {
			subject: subject,
			html: body,
		},
		recipients: {
			to: receivers,
		},
	};
	emailClient.beginSend(message);
};
export default sendEmail;
