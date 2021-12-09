if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const moviesRouter = require("./movies/movies_router");
const reviewsRouter = require("./reviews/reviews_router");
const theatersRouter = require("./theaters/theaters_router");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");
const cors = require("cors");

app.use(cors());
app.use(express.json())

app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/theaters", theatersRouter);

app.use(notFound);

app.use(errorHandler);

module.exports = app;
