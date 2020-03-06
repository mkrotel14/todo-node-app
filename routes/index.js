var express = require("express");
var router = express.Router();

/* GET ToDo page */
router.get("/todo", function(req, res, next) {
  res.render("todo.hbs");
});

/* POST ToDo page */
// router.post("/todo", function(req, res, next) {
//   res.render("todo.hbs");
// });

module.exports = router;
