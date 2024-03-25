const openYouTubeVideo = (videoId) => {
  // Construct the YouTube video URL using the videoId
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  // Open the video URL in a new tab
  window.open(videoUrl, "_blank");
};

export default openYouTubeVideo;
