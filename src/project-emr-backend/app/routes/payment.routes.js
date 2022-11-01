const { authJwt } = require("../middleware");
const controller = require("../controllers/payment.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/payment/config",
        [authJwt.verifyToken],
        controller.config);

    app.post(
        "/api/payment/create-payment-intent",
        [authJwt.verifyToken],
        controller.paymentIntent
    );
};
