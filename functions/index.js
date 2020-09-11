const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const { email, password } = require('./config.js');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password,
    }
});

transporter.use('compile', htmlToText());

const sendOrderEmail = data => {
    const options = {
        from: `BakeCake <${email}>`,
        to: data.email,
        subject: 'Your order from BakeCake',
        html: `
            <div>
                <h2>Hello, ${data.nameClient}</h2>
                <h3>Your Order:</h3>
                <ul>
                    ${data.order.map(({ itemName, count, price}) => (
                        `<li>${itemName} - quantity ${count}, price ${price * count} €</li>`
                    ))}
                </ul>
                <p>Total: ${data.order.reduce((sum, item) =>
                    sum + (item.price + item.count), 0)} €</p>
                <small>Wait for courier.</small>
            </div>
        `,
    };

    transporter.sendMail(options);
}

exports.sendUserEmail = functions.database.ref('orders/{pushiD}')
    .onCreate(order => sendOrderEmail(order));
