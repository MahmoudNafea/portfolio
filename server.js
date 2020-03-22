const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join("build");
app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
