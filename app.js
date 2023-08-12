const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes");
const errorHandler = require("./middlewares/errorHandler");
const path = require("path");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(router);
app.use(errorHandler);
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
