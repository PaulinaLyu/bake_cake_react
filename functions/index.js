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
                <h2>Hello, ${data.nameCustomer}</h2>
                <h3>Your Order:</h3>
                <ul>
                    ${data.order.map(({ name, count, price, topping, choice }) => {
                        const toppings = topping !== 'no topping' ? ` with ${topping}` : '';
                        const choices = choice !== 'no choices' ? ` ${choice}` : '';
                        return `<li><b>${name}</b>${toppings}${choices} - ${count} items(s), price ${price * count + (topping !== 'no topping' ? price * 0.1 * topping.length : 0)} €</li>`
                    }).join('')}
                </ul>
                <p><b>Total: ${data.order.reduce((sum, item) =>
                    sum + (item.price * item.count + (item.topping !== 'no topping' ? item.price * 0.1 * item.topping.length : 0)), 0)} €</b></p>
                <p>Please, wait for your delivery.</p>
            </div>
        `,
    };

    transporter.sendMail(options);
}

exports.sendUserEmail = functions.database.ref('orders/{pushiD}')
    .onCreate(order => sendOrderEmail(order.val()));

