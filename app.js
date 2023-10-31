const express = require(`express`);
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/home", (req, res) => {
  // res.send("Hello desde home");
  res.sendFile(__dirname + "/public/home.html");
});
app.get("/about", (req, res) => {
  //   res.send("Hello desde about");
  res.sendFile(__dirname + "/public/about.html");
});
app.get("/works", (req, res) => {
  // res.send("Hello desde works");
  res.sendFile(__dirname + "/public/works.html");
});
app.get("/fotoGallery", (req, res) => {
  // res.send("Hello desde fotoGallery");
  res.sendFile(__dirname + "/public/fotoGallery.html");
});

app.listen(port, () => {
  console.log("server listening");
});
