const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const addCritic = mapProperties({
  critic_id: "critic.critic_id",
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
  created_at: "critic.created_at",
  updated_at: "critic.updated_at"
});

function list() {
    return knex("movies").select("*")
}

function listIsShowing() {
    return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .select("m.*")
    .distinct("m.movie_id")
    .where({ "mt.is_showing": true })
}

function read(movie_id) {
    return knex("movies")
    .select("*")
    .where({ movie_id })
    .first();
}

function readMovieReviews(movieId){
    return knex("reviews as r") //previous movies as m. Don't need movies table in this function
    //.join("reviews as r", "r.movie_id", "m.movie_id")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .select("r.*", "c.*") 
    .where({ "r.movie_id": movieId })
    .then((reviewsArray)=>reviewsArray.map(addCritic));
}

function readTheaterShowings(movieId){
    return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .join("movies as m", "mt.movie_id", "m.movie_id")
    .select("t.*")
    .where({ "mt.is_showing": true })
    .where({ "mt.movie_id": movieId })
    .orderBy("t.theater_id");
}

module.exports = {
    list,
    listIsShowing,
    read,
    readMovieReviews,
    readTheaterShowings,
}