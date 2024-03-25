const mockMovieData = {
  id: '1',
  title: 'The Wolf of Wall Street',
  releaseDate: '2022-01-01',
  runtime: '120 mins',
  language: 'English',
  rating: 7.5,
  voteCount: 1000,
  director: 'Mock Director',
  overview: 'This is a mock movie overview.This is a mock movie overview.This is a mock movie overview.This is a mock movie overview.This is a mock movie overview.This is a mock movie overview.This is a mock movie overview.This is a mock movie overview.This is a mock movie overview.',
  poster: "https://images.unsplash.com/photo-1710677742606-f8c7ef6e987e?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  actors: [
    { id: 1, name: 'Actor 1' },
    { id: 2, name: 'Actor 2' },
    // Add more actors as needed
  ],
  relatedMovies: [
    { id: 1, title: 'Related Movie 1' },
    { id: 2, title: 'Related Movie 2' },
    // Add more related movies as needed
  ],
  creditSection: [
    { id: 1, name: "Actor 1", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Actor 2", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Actor 3", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Actor 4", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Actor 5", image: "https://via.placeholder.com/150" },
  ],
  relatedMovies:[
    {
      id: 1,
      title: "Movie 1",
      posterUrl: "",
      description: "description description description description description",
      type: "movie",
      rating: "8.6",
      votes:"10000",
    },
    {
      id: 2,
      title: "Movie 2",
      posterUrl: "",
      description: "description description description description description",
      rating: "8.6",
      votes:"10000",
    },
    {
      id: 3,
      title: "Movie 3",
      posterUrl: "",
      description: "description description description description description",
      rating: "8.6",
      votes:"10000",
    },
    {
      id: 4,
      title: "Movie 4",
      posterUrl: "",
      description: "description description description description description",
      rating: "8.6",
      votes:"10000",
    },
    {
      id: 5,
      title: "Movie 5",
      posterUrl: "",
      description: "description description description description description",
      rating: "8.6",
      votes:"10000",
    },
  ]
};

export default mockMovieData;