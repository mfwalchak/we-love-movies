const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");
//const reduceProperties = require("../utils/reduce-properties");

const addCriticProps = mapProperties({
  //critic_id: "critic.critic_id",
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
  //created_at: "critic.created_at",
  //updated_at: "critic.updated_at"
});

const reviewReformatter = (reviewId) => {
  return knex("reviews as r")
  .join("critics as c", "r.critic_id", "c.critic_id")
  .select("*")
  .where({ "r.review_id": reviewId })
  .first()
  .then(addCriticProps);
}

// const reduceReviewsAndCritics = reduceProperties("critic_id",
// { 
//     "critic_id": ["critics", null, "critic_id"],
//     "preferred_name": ["critics", null, "preferred_name"],
//     "surname": ["critics", null, "surname"],
//     "organization_name": ["critics", null, "organization_name"],
//     "created_at": ["critics", null, "created_at"],
//     "updated_at": ["critics", null, "updated_at"]
// });

function list(){
  return knex("reviews").select("*");
}

function read(review_id) {
    return knex("reviews").select("*").where({ review_id }).first();
  }
  
function update(updatedReview) {
    return knex("reviews as r")
      // .join("critics as c", "c.critic_id", "r.critic_id")
      .select("*")
      .where({ review_id: updatedReview.review_id })
      .update(updatedReview)
      //.then(reduceReviewsAndCritics);
      //.returning("r.*", "c.*")
      //.then((updatedData)=>updatedData.map(addCritic))
      .then((updatedReview)=>updatedReview[0])
      
  }

function destroy(review_id) {
    return knex("reviews").where({ review_id }).del();
}

module.exports = {
    list,
    read,
    update,
    reviewReformatter,
    delete: destroy,
}