import nodemailer from "nodemailer";

const contact = async (req, res) => {
    const { name, email, message, subject } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // use SSL
        auth: {
            user: process.env.MY_APP_EMAIL,
            pass: process.env.MY_APP_PASS
        }
    });

    // Email content
    const mailOptions = {
        from: email, // sender address
        to: 'process.env.MY_EMAIL_RECEIVER', // list of receivers (replace with your actual recipient email address)
        replyTo : email,
        subject: `Anda mendapatkan pesan dari ${name}`,
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Subject: ${subject}</p>
               <p>Message: ${message}</p>`
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email' });
    }

};

export default contact;
