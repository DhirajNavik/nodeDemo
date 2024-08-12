const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.get("/", function (req, res) {
  res.send("Hello world");
});


const personRoutes = require("./routes/personRoutes")
const menuRoutes = require("./routes/menuRoutes")

app.use('/person',personRoutes);
app.use("/",menuRoutes)

app.listen(3000, () => {
  console.log("server is lie on 3000");
});
