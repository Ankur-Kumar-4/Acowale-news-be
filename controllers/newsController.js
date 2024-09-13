// controllers/newsController.js
const newsService = require("../services/newsService");

const getNews = async (req, res) => {
  const { query, region, category, page = 1 } = req.query;

  // Log incoming request data
  console.log("Incoming request:", { query, region, category, page });

  try {
    const newsData = await newsService.fetchNews({
      query,
      region,
      category,
      page,
    });
    res.json(newsData);
  } catch (error) {
    console.error("Error in getNews:", error);
    res
      .status(500)
      .json({ message: "Error fetching news", error: error.message });
  }
};

module.exports = { getNews };
