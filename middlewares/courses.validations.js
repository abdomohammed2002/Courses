const { body, validationResult } = require("express-validator");
const validation = () => {
  return [
    body("name")
      .isString()
      .withMessage("name must be a string")
      .isLength({ min: 3 })
      .withMessage("name must be at least 3 characters long"),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
  ];
};
module.exports = { validation };
