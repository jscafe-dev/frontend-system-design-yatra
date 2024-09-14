import express from "express";
import cors from "cors";
import events from "events";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3000;

const messageEventEmitter = new events.EventEmitter();

app.get("/messages", (req, res) => {
  messageEventEmitter.once("newMessage", (from, message) => {
    res.json({ from, message });
  });
});

app.post("/new-message", (req, res) => {
  const { from, message } = req.body;
  messageEventEmitter.emit("newMessage", from, message);
  res.json({ message: "success" });
});

app.listen(PORT, () => {
  console.log("long polling server started");
});
