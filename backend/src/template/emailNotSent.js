const emailNotSent = (name, culrav_id) => {
	return `
    <div>
        <p><b>Dear ${name} (${culrav_id}),</b></p>
        <p>We hope this email finds you well. As part of our effort to keep our records up-to-date, we kindly request that you update your phone number on file.</p>
        <p>Having accurate phone numbers helps us to better communicate with you.</p>
        <p>To update your phone number, please follow the instructions below:</p>
        <ol>
        <li>Log in to your account on our website, <a href="https://culrav.online">https://culrav.online</a>.</li>
        <li>Go to your Dashboard <a href="https://culrav.online/dashboard">https://culrav.online/dashboard</a></li>
        <li>Select the Profile Section.</li>
        <li>Enter your phone number and click "Edit Details".</li>
        </ol>
        <p>Thank you for helping us keep your information current.</p>
        <p>Best regards,</p>
        <p>Culrav Admin</p>
    </div>
    `;
};
export default emailNotSent;
