const express = require("express");
const cors = require("cors");
const chats = require("./data/data");
const dbConnection = require("./config/db");
const router = require("./routes/authRoute");
require("dotenv").config();

const port = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());
dbConnection();

app.use("/", router);
app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((chat) => chat._id == req.params.id);
  res.send(singleChat);
});

app.listen(port, console.log("Server is running"));
