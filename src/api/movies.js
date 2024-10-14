import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/authentication",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDJmNjg2NjRmOTkyMzEwZGNhNmZkNmUzYzVlZDFiMCIsIm5iZiI6MTcyODcxNjk4OS4zMzUyNTMsInN1YiI6IjY3MGExZjgzM2JiNDU1N2M2NjlhZjcwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B0j1nminh6oHHQScoUgVirbKhuJVudWU0PQxOl4bmok",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
