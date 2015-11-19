require('dotenv').load();
var express = require('express');
var router = express.Router();
var stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Admin Send Stripe Payments' });
});

router.post('/', function(req, res, next) {
    console.log(req.body.stripeToken);

    stripe.customers.create({
        description : 'Customer for test@example.com',
        source      : "tok_178er7Ffzwl6D33Dws1rTNEj"
        }, function(err, customer) {
          // asynchronously called
        });

    var stripeToken = req.body.stripeToken;
    var charge = stripe.charges.create({
        amount      : 2000, // amount in cents, again
        currency    : "usd",
        source      : stripeToken,
        description : "Example charge"
    }, function(err, charge) {
        if (err && err.type === 'StripeCardError') {
            res.json('card error');
        } else {
            console.log()
            res.json('much success');
        }
    });
})

module.exports = router;
