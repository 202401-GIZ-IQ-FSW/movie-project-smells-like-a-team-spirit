const axios = require("axios");
export async function fetchDataToEndpoint(endpoint) {
    const baseUrl = "https://api.themoviedb.org/3";
  
    const url = `${baseUrl}/${endpoint}?api_key=${process.env.API_KEY}`;
  
    try {
      const response = await axios.get(url);
      console.log("Data fetched successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; 
    }
  }
  