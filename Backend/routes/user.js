var express = require("express");
var router = express.Router();
const axios = require("axios");
const recipeUtils = require("./utils/recipesAPIutils");
const DButils = require("./utils/DButils");

//cookie authentication middleware
router.use(function (req, res, next) {
  if (req.session && req.session.id) {
    const id = req.session.id;
    DButils.getUserByID(id).then((response) => {
      if (response && response.username) {
        req.username = response.username;
        next();
      }
      else{
        res.sendStatus(401);
      }
    })
    .catch((error) => next(error));
  } else {
    res.sendStatus(401);
  }
});

 //TODO 
router.get("/recipeInfo/:ids", function (req, res, next) {
  try {
    let ids = JSON.parse(req.params.ids);
    let username = req.username;
    console.log(ids,username);
    //TODO extract meta info from DB
    res.sendStatus(200);

  } catch (error) {
    next(error);
  }
});

//TODO
router.get("/lastWatchedRecipesPreview", function (req, res, next) {
  try {
    let username = req.username;
    res.sendStatus(200);

  } catch (error) {
    next(error);
  }
});

//TODO
router.get("/favoriteRecipesPreview", async (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
});

//TODO
router.get("/PersonalRecipesPreview", function (req, res, next) {
  try {

  } catch (error) {
    next(error);
  }
});

//TODO
router.get("/personalRecipeByid", async (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
});

//TODO
router.get("/FamilyRecipesPreview", function (req, res, next) {
  try {

  } catch (error) {
    next(error);
  }
});

//TODO
router.get("/familyRecipeByid", async (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
});

//TODO
router.post("/markAsFavorite", async (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
});

//TODO
router.post("/markAsWatched", function (req, res, next) {
  try {

  } catch (error) {
    next(error);
  }
});

//TODO
router.post("/addRecipe", async (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
});




module.exports = router;