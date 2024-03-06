const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers.courses");
const { validation } = require("../middlewares/courses.validations");

router
  .route("/api/courses")
  .get(controllers.getCourses)
  .post(validation(), controllers.addCourse, );

router
  .route("/api/courses/:id")
  .get(controllers.getOneCourse)
  .patch(controllers.addCourse)
  .delete(controllers.deleteCourse);

//delete course using filter

module.exports = router;
