const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const Sentiment = require("sentiment");

const config = require("./helper/config");
const formRoute = require("./routes/api/serve.form");

const app = express();
//adding socket.io

const server = require("http").Server(app);
const io = require("socket.io")(server);

const PORT = process.env.PORT || 8000;

//connecting mongodb
mongoose
  .connect(config.mongoURL)
  .then(() => {
    console.log(`connected.....`);
  })
  .catch(err => {
    console.error(err);
  });

app.set("view engine", "ejs");
//serving static files
app.use(express.static(path.join(__dirname, "/public")));

//using bodyparser
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

//Route in api/serve.form.js
app.use(formRoute);

//establishing connection for socket.io

io.on("connection", socket => {
  console.log(`connection established....`);

  socket.on("runanaysis", text => {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(text);
    console.log(result);
    const { score, comparative, tokens, words, positive, negative } = result;
    console.log("socket", result);
    socket.emit("result", result);
  });

  socket.on("disconnection", () => {
    console.log("disconnected....io...");
  });
});

server.listen(PORT, err => {
  if (err) throw err;
  console.log(`server is running at ${PORT}`);
});
