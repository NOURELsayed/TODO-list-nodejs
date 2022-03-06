const router = require("express").Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const { indexHandler } = require("../controllers/index");

router.get("/", ensureGuest, indexHandler);

router.get("/log", ensureAuth, logHandler);
module.exports = router;
