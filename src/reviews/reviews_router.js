const router = require("express").Router();
const app = require("../app");
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./reviews_controller");

router
    .route("/:reviewId")
    .get(controller.read)
    .put(controller.update)
    .delete(controller.delete)
    .all(methodNotAllowed);

router
    .route("/")
    .get(controller.list)
    .all(methodNotAllowed);

module.exports = router;