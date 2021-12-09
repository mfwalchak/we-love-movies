const router = require("express").Router();
const app = require("../app");
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./movies_controller");
const { get } = require("superagent");


//all routes should start form the assumption that /movies precedes
router
    .route("/:movieId/reviews")
    .get(controller.readMovieReviews)
    .all(methodNotAllowed);

router
    .route("/:movieId/theaters")
    .get(controller.readTheaterShowings)
    .all(methodNotAllowed);

router
    .route("/:movieId")
    .get(controller.read)
    .all(methodNotAllowed);

router
    .route("/")
    .get(controller.list)
    .all(methodNotAllowed);


module.exports = router;