const router = require("express").Router();

router.get("/", (req, res) => {
  // res.send("UI is working");
  res.render("index", { data: "Ashma Maharjan" });
});

router.get("/qr-gen", (req, res) => {
  // res.send("UI is working");
  res.render("qr-gen");
});

router.get("/send-mail", (req, res) => {
  res.render("contact-form");
});

module.exports = router;
