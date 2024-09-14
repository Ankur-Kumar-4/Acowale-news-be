const { fetchSearchResults, fetchTopHeadlines } = require("./apiServices");

const fetchNews = async ({
  searchTerm,
  category,
  country,
  language,
  currentPage,
  pageSize,
}) => {
  let response;
  try {
    if (searchTerm === "" || searchTerm === "news") {
      response = await fetchTopHeadlines({
        searchTerm,
        category,
        country,
        language,
        currentPage,
        pageSize,
      });
    } else {
      response = await fetchSearchResults({
        searchTerm,
        category,
        country,
        language,
        currentPage,
        pageSize,
      });
    }

    return response;
  } catch (error) {
    console.error(
      "Error fetching data from Gnews API:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Error fetching data from Gnews API");
  }
};

module.exports = { fetchNews };
