const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("API is working");
});

router.get("/qr", (req, res) => {
  res.send("API QR is working");
});

module.exports = router;
