const PORT = process.env.PORT || 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

const path = require("path");

app.use(cors());

app.get("/", (req, res) => {
  res.json("hi");
});

app.get("/add", (req, res) => {
  const query = req.query.query;
  const movies = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      api_key: process.env.REACT_APP_TMDB_KEY,
      language: "en-US",
      page: 1,
      include_adult: false,
      query: query,
    },
  };

  axios
    .request(movies)
    .then((response) => {
      res.json(response.data.results);
    })
    .catch((error) => {
      console.error(error);
    });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    req.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
