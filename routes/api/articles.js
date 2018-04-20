const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/articles"
router.route("/articles")
  .get(articleController.findAll)
  .post(articleController.create)
  .delete(articleController.remove)

module.exports = router;