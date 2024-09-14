// routes/newsRoutes.js
const express = require("express");
const { getNews } = require("../controllers/newsController");

const router = express.Router();

// Define route for fetching news with search, pagination, and filters
router.get("/", getNews);

module.exports = router;
