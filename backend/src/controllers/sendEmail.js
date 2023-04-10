import dbg from "debug";
const debug = dbg("controller:sendEmail");
const {
	EmailClient,
	KnownEmailSendStatus,
} = require("@azure/communication-email");
import config from "../config";
const sendEmail = async (data) => {
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
	const POLLER_WAIT_TIME = 10;

	const poller = await emailClient.beginSend(message);

	if (!poller.getOperationState().isStarted) {
		throw "Poller was not started.";
	}

	let timeElapsed = 0;
	while (!poller.isDone()) {
		poller.poll();
		console.log("Email send polling in progress");

		await new Promise((resolve) =>
			setTimeout(resolve, POLLER_WAIT_TIME * 1000)
		);
		timeElapsed += 10;

		if (timeElapsed > 18 * POLLER_WAIT_TIME) {
			throw "Polling timed out.";
		}
	}

	if (poller.getResult().status === KnownEmailSendStatus.Succeeded) {
		console.log(
			`Successfully sent the email (operation id: ${poller.getResult().id})`
		);
	} else {
		throw poller.getResult().error;
	}
};
export default sendEmail;
