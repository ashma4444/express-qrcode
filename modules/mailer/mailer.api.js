const router = require("express").Router();
const mailerController = require("./mailer.controller");

// router.get("/", (req, res) => {
//   res.send("k cha");
// });

router.post("/", async (req, res) => {
  const { email } = req.body;
  const data = await mailerController.mailer(email);
  res.json({ data });
});

module.exports = router;
