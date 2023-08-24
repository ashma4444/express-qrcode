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

router.post("/", async (req, res, next) => {
  try {
    const { url } = req.body;
    if (!url) {
      throw new Error("URL is required");
    }
    const data = await QRController.createQR(url);
    res.json({ data });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
