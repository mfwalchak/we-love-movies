const reviewsService = require("./reviews_service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const { as } = require("../db/connection");

//add reviews CRUD functions here

async function reviewExists(req, res, next) {
    //console.log("req.body in reviewExists:", req.body);
    const review = await reviewsService.read(req.params.reviewId);
    if (review) {
      res.locals.review = review;
      return next();
    }
    next({ status: 404, message: `Review cannot be found.` });
  }

async function list(req, res){
  const data = await reviewsService.list();
  res.json({ data });
}

async function read(req, res) {
    const { review: data } = res.locals;
    res.json({ data });
}


async function update(req, res) {
    const updatedReview = {
        ...req.body.data,
        review_id: res.locals.review.review_id,
      };
      await reviewsService.update(updatedReview);
      const reformattedReview = await reviewsService.reviewReformatter(res.locals.review.review_id);
      res.json({ data: reformattedReview });
}

async function destroy(req, res){
    await reviewsService.delete(req.params.reviewId);
    res.sendStatus(204).json();
}

module.exports = {
    list,
    read: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(read)],
    update: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(update)],
    delete: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy)],
}
