// services/newsService.js
const axios = require("axios");

const API_KEY = process.env.GNEWS_API_KEY;
const BASE_URL = "https://gnews.io/api/v4";

const fetchNews = async ({ query, region, category, page }) => {
  const url = `${BASE_URL}/search?q=${query}&token=${API_KEY}&country=${region}&category=${category}&page=${page}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching data from Gnews API:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Error fetching data from Gnews API");
  }
};

module.exports = { fetchNews };
