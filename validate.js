const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // Serve index.html

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/submit", (req, res) => {
  console.log("🎓 New Registration Received:");
  console.log(req.body);

  res.send(`
    <h2>Thank you, ${req.body.fullname}!</h2>
    <p>Your registration has been received.</p>
    <a href="/">Back to Form</a>
  `);
});

app.listen(PORT, () => {
  console.log(🚀 Server running at http://localhost:${PORT});
});
