require('dotenv').load();
var express = require('express');
var router = express.Router();
var stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Admin Send Stripe Payments' });
});

router.post('/', function(req, res, next) {
    var stripeToken = req.body.stripeToken;
    var charge = stripe.char
})

router.get('/success', function(req, res, next) {
    res.render('index', {'title' : 'Success'})
})

router.get('/authorize', function(req, res) {
  // Redirect to Stripe /oauth/authorize endpoint
  res.redirect('https://connect.stripe.com/oauth/authorize' + '?' + qs.stringify({
    response_type: 'code',
    scope: 'read_write',
    client_id: 'ca_7JkneDyQ6WBN1XzqVtlP3YXjcJFv1JOK'
  }));
});

router.get('/oauth/callback', function(req, res) {

  var code = req.query.code;

  // Make /oauth/token endpoint POST request
  request.post({
    url: TOKEN_URI,
    form: {
      grant_type: 'authorization_code',
      client_id: CLIENT_ID,
      code: code,
      client_secret: API_KEY
    }
  }, function(err, r, body) {

    var accessToken = JSON.parse(body).access_token;

    // Do something with your accessToken

    // For demo"s sake, output in response:
    res.send({ 'Your Token': accessToken });

  });
});

module.exports = router;
