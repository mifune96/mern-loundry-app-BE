const { body, param, validationResult } = require("express-validator");
const { Unit } = require("../../../db/models");
const { StatusCodes } = require("http-status-codes");

module.exports = {
  unitCreateAndUpdateValidation: [
    body("code").notEmpty().withMessage("Please enter your code"),
    body("name").notEmpty().withMessage("Please enter your name"),
    (req, res, next) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res
          .status(StatusCodes.UNPROCESSABLE_ENTITY)
          .send({ message: "error", error: error.array() });
      }
      next();
    },
  ],
};
