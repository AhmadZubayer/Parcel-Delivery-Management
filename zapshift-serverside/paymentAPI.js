const stripe = require('stripe')(process.env.STRIPE_KEY)

module.exports = (app) => {

    app.post('/create-checkout-session', async (req, res) => {
        const paymentInfo = req.body;
        const amount = parseInt(paymentInfo.cost) * 100;
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    // Provide the exact Price ID (for example, price_1234) of the product you want to sell
                    price_data: {
                        currency: 'usd',
                        unit_amount: amount,
                        product_data: {
                            name: `Please Pay for: ${paymentInfo.parcelName}`
                        }
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',

            metadata: {
                parcelId: paymentInfo.parcelId
            },

            customer_email: paymentInfo.senderEmail,
            success_url: `${process.env.SITE_DOMAIN}/dashboard/payment-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.SITE_DOMAIN}/dashboard/payment-cancelled`
        })
        console.log(session);
        res.send({url: session.url})
    })
}