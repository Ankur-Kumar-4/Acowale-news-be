// app.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const newsRoutes = require("./routes/newsRoute");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

// Use the news routes
app.use("/news", newsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
