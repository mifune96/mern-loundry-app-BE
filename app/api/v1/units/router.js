const express = require("express");
const { getAll, create, update, getOne, destroy } = require("./controller");
const router = express.Router();
const { unitCreateAndUpdateValidation } = require("./validation");

/* GET users listing. */
router.get("/units", getAll);
router.post("/units", unitCreateAndUpdateValidation, create);
router.get("/units/:id", getOne);
router.put("/units/:id", unitCreateAndUpdateValidation, update);
router.delete("/units/:id", destroy);

module.exports = router;
