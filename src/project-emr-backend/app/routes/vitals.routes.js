const { authJwt } = require("../middleware");
const controller = require("../controllers/vitals.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/vitals/:userId",
        [authJwt.verifyToken],
        controller.getByUserId);
    
    // app.get(
    //     "/api/vitals/?userId=:userId",
    //     [authJwt.verifyToken],
    //     controller.getByUserId);

    app.post(
        "/api/vitals",
        [authJwt.verifyToken],
        controller.create
    );

    app.put(
        "/api/vitals/:id",
        [authJwt.verifyToken],
        controller.update
    );

    app.delete(
        "/api/vitals/:id",
        [authJwt.verifyToken],
        controller.create
    );

};
 