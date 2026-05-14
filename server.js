const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());

// 👉 anna frontend näkyä backendin kautta
app.use(express.static(path.join(__dirname, "../frontend")));

// 📩 contact API
app.post("/contact", (req, res) => {
  const newMessage = req.body;

  let messages = [];

  if (fs.existsSync("messages.json")) {
    messages = JSON.parse(fs.readFileSync("messages.json"));
  }

  messages.push({
    ...newMessage,
    time: new Date().toISOString()
  });

  fs.writeFileSync("messages.json", JSON.stringify(messages, null, 2));

  res.json({ success: true });
});

// 🌐 käynnistys
app.listen(3000, () => {
  console.log("GradeIn backend running on http://localhost:3000");
});
app.post("/contact", (req, res) => {
  console.log("VIesti tuli!");
  console.log(req.body);

  res.json({ ok: true });
});