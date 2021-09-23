if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const cors = require("cors");
const express = require("express");
const PORT = process.env.PORT || 3000;
const router = require("./routes");
const app = express();
const { createServer } = require("http");
const httpServer = createServer(app);
const io = require("socket.io")(httpServer);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("sendMessage", (data)=>{
    console.log(data, 'di server');

    io.emit("broadcastMessage", data)
  })
});

httpServer.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});