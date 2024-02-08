const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(cors()); // Use CORS
app.use(express.json());
app.use("/images", express.static("images"));

// Read the data from phones.json
const loadPhonesData = () => {
  return JSON.parse(fs.readFileSync("phones.json", "utf8"));
};

// Route to show ALL phones
app.get("/phones", (req, res) => {
  const phones = loadPhonesData();
  res.json(phones);
});

// Route to show phone details by ID
app.get("/phones/:id", (req, res) => {
  const phones = loadPhonesData();
  const phone = phones.find((p) => p.id === parseInt(req.params.id));
  if (!phone) {
    return res.status(404).send("Phone not found");
  }
  res.json(phone);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
