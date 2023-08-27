const express = require("express");

const app = express();
const indexRouter = require("./routes"); // index.js mention nagere pani automatically index.js lai khojcha

app.use(express.json());

app.use("/", indexRouter);

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

//middleware
app.use((err, req, res, next) => {
  console.error(err);
  //   res.status(500).json({ msg: "Sth went wrong..." });
  res.status(500).json({ msg: err.toString() || "sth went wrong" });
});

app.listen(3333); // above 3000 we can use any port
console.log("App is running on port 3333");

// to run: npm run start (start- may change as per package.json file)
// localhost:3333
