const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");

const app = express();
const upload = multer();

app.use(cors()); // allow requests from HTML file
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/submit", upload.single("resume"), (req, res) => {
  console.log(" Form Data Received:");
  console.log(req.body);

  if(req.file){
    console.log("📂 File Uploaded:", req.file.originalname);
  }

  res.send(`
    <h2>Form Submitted Successfully!</h2>
    <p>Here is what you submitted:</p>
    <pre>${JSON.stringify(req.body, null, 2)}</pre>
    ${req.file ? `<p>File Uploaded: ${req.file.originalname}</p>` : ""}
  `);
});

app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
