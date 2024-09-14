const newsService = require("../services/newsService");

const getNews = async (req, res) => {
  const { q, category, country, lang, page, max } = req.query;

  console.log("Incoming request:", req.query);

  try {
    const newsData = await newsService.fetchNews({
      searchTerm: q,
      category,
      country,
      language: lang,
      currentPage: page,
      pageSize: max,
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
