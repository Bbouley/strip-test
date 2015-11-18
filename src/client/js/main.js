// add scripts

Stripe.setPublishableKey('pk_test_vT4aH91XlPiEJhU79u6Tktxz');

$(document).on('ready', function() {

    $('.stripe-connect').on('click', function(e) {
        e.preventDefault();

        $.get('/authorize', function(data) {
            console.log(data);
        })

    })

});
