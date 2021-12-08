//adding movies CRUD functions here
const moviesService = require("./movies_service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const { as } = require("../db/connection");

async function movieExists(req, res, next) {
    const movie = await moviesService.read(req.params.movieId);
    if (movie) {
      res.locals.movie = movie;
      return next();
    }
    next({ status: 404, message: `Movie cannot be found.` });
  }


async function list(req, res, next) {
  //req.query strign?is_showing=true
  //query parameter key = is_showing, value = true
  const { is_showing } = req.query;
  let data;

  if ( is_showing == "true"){
    data = await moviesService.listIsShowing()
    res.json({ data })
  }     
  data = await moviesService.list();
  res.json({ data });
  
}

async function read(req, res, next) {
    const { movie: data } = res.locals;
    res.json({ data });
}

async function readMovieReviews(req, res, next) {
  const { movie_id } = res.locals.movie;
  res.json({ data: await moviesService.readMovieReviews(movie_id) });
}

async function readTheaterShowings(req, res, next){
  const data = await moviesService.readTheaterShowings(res.locals.movie.movie_id);
  res.json({ data });
}


module.exports = {
    list: asyncErrorBoundary(list),
    read: [asyncErrorBoundary(movieExists), asyncErrorBoundary(read)],
    readTheaterShowings: [asyncErrorBoundary(movieExists), asyncErrorBoundary(readTheaterShowings)],
    readMovieReviews: [asyncErrorBoundary(movieExists), asyncErrorBoundary(readMovieReviews)],
}