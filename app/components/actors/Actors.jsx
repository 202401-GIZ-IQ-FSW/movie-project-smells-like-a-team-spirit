require('dotenv').config(); // Load environment variables from .env.local
const fetch = require('node-fetch');

async function fetchAllActorsData() {
  const apiKey = process.env.API_KEY; 
  const numberOfActors = 10; 

  // Discover popular actors
  const discoverUrl = `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&page=1`; 
  const discoverResponse = await fetch(discoverUrl);
  const discoverData = await discoverResponse.json();

  const actorIds = discoverData.results.slice(0, numberOfActors).map(actor => actor.id);
  const actorsData = [];

  // Fetch and store details for each actor
  for (const actorId of actorIds) {
    const creditsUrl = `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${apiKey}&language=en-US`;
    const creditsResponse = await fetch(creditsUrl);
    const creditsData = await creditsResponse.json();

    actorsData.push({
      id: actorId,
      // ... other actor details you want to include 
      movie_credits: creditsData
    });
  }

  // Save to JSON file
  const fs = require('fs');
  fs.writeFileSync('actors_data.json', JSON.stringify(actorsData));
}

fetchAllActorsData();
