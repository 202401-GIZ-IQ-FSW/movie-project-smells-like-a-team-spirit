//  function to fetch data from the API and return it as a JSON object.
//  and the snippet from next.config.mjs to set the API_KEY as an environment variable.

const axios = require("axios");
export async function fetchDataToEndpoint(endpoint) {
    const baseUrl = "https://api.themoviedb.org/3";
  
    const url = `${baseUrl}/${endpoint}?api_key=${process.env.API_KEY}`;
  
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; 
    }
  }
  