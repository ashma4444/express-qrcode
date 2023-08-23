const router = require("express").Router();
const qrApiRoutes = require("../modules/qr/qr.api");

router.get("/", (req, res) => {
  res.send("API is working");
});

router.use("/qr", qrApiRoutes);

module.exports = router;
