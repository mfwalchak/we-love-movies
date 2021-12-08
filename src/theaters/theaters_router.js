const router = require("express").Router();
const app = require("../app");
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./theaters_controller");
const cors = require("cors");

router
    .route("/")
    .get(controller.list)
    .all(methodNotAllowed)

module.exports = router;