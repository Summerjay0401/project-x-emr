const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-08-01",
});

exports.config = (req, res) => {
    res.send({
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
  };
  
exports.paymentIntent = async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            currency: "USD",
            amount: 1999,
            automatic_payment_methods: { enabled: true },
        });
  
        // Send publishable key and PaymentIntent details to client
        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (e) {
        return res.status(400).send({
            error: {
                message: e.message,
            },
        })
    }
};
