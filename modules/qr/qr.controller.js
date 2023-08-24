const QRCode = require("qrcode");

const createQR = async (data) => {
  const result = await QRCode.toDataURL(data);
  return result;
};

module.exports = { createQR };
