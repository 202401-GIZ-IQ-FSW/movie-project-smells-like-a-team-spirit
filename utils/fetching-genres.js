async function fetchDataToEndpoint(endpoint, options = {}) {
    const baseUrl = "https://api.themoviedb.org/3";
  
    const url = `${baseUrl}/${endpoint}?api_key=${process.env.API_KEY}`;
  
    try {
      const response = await axios.get(url, options);
  
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; 
    }
  }
  