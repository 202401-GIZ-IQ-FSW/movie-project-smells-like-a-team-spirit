export default async function fetchTrailer(id) {
  const axios = require("axios");
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.API_KEY}`
  );
  const youtube = res.data.results;
  console.log(youtube, 'in the function')
  return youtube[0];
}
