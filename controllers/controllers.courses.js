const courses = require("../data/data.courses");
const getCourses = (req, res) => {
  res.json(courses);
};
const getOneCourse = (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given ID was not found.");
  res.json(course);
};
const addCourse = (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.status(201).json(course);
};
const updateCourse = (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given ID was not found.");
  course.name = req.body.name;
  res.status(200).send(course);
};
const deleteCourse = (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given ID was not found.");
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.status(200).send(course);
};

module.exports = {
  getCourses,
  getOneCourse,
  addCourse,
  updateCourse,
  deleteCourse,
};
