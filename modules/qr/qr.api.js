const router = require("express").Router();
const QRController = require("./qr.controller");

// browser/ frontend bata data accept garne tarika
// query
//params
//body

// router.get("/", async (req, res) => {
//   //   console.log(req);
//   const { body } = req; // destructuring
//   console.log(body);
// });

router.post("/", async (req, res) => {
  const { url } = req.body;
  const data = await QRController.createQR(url);
  res.json({ data });
});

module.exports = router;
