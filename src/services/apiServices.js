const axios = require("axios");

const API_KEY = process.env.GNEWS_API_KEY;
const BASE_URL = "https://gnews.io/api/v4";

const fetchSearchResults = async ({
  searchTerm,
  category,
  country,
  language,
  currentPage,
  pageSize,
}) => {
  let url = `${BASE_URL}/search?q=${searchTerm}&apikey=${API_KEY}&page=${currentPage}&pageSize=${pageSize}`;

  if (language) {
    url += `&lang=${language}`;
  } else {
    url += `&lang=en`;
  }

  if (category) {
    url += `&category=${category}`;
  } else {
    url += `&category=general`;
  }

  if (country) {
    url += `&country=${country}`;
  }

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
const fetchTopHeadlines = async ({
  category,
  country,
  language,
  currentPage,
  pageSize,
}) => {
  let url = `${BASE_URL}/top-headlines?&apikey=${API_KEY}&page=${currentPage}&pageSize=${pageSize}`;

  if (language) {
    url += `&lang=${language}`;
  } else {
    url += `&lang=en`;
  }

  if (category) {
    url += `&category=${category}`;
  } else {
    url += `&category=general`;
  }

  if (country) {
    url += `&country=${country}`;
  }
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
module.exports = { fetchSearchResults, fetchTopHeadlines };
