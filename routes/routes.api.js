const router = require("express").Router();
const qrApiRoutes = require("../modules/qr/qr.api");
const mailerApiRoutes = require("../modules/mailer/mailer.api");

router.get("/", (req, res) => {
  res.send("API is working");
});

router.use("/qr", qrApiRoutes);

router.use("/mailer", mailerApiRoutes);

module.exports = router;
