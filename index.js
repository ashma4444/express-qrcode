const express = require("express");

const app = express();
const indexRouter = require("./routes/router"); // index.js mention nagere pani automatically index.js lai khojcha

app.use("/", indexRouter);

app.listen(3333); // above 3000 we can use any port
console.log("App is running on port 3333");

// to run: npm run start (start- may change as per package.json file)
// localhost:3333
