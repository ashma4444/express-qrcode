const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("UI is working");
});

module.exports = router;
