const router = require("express").Router();
const app = require("../app");
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./reviews_controller");
const cors = require("cors");


router
    .route("/:reviewId")
    .get(controller.read)
    .put(cors(), controller.update)
    .delete(cors(), controller.delete)
    .all(methodNotAllowed);

router
    .route("/")
    .get(controller.list)
    .all(methodNotAllowed);

module.exports = router;