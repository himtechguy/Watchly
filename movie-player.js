const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

const movie = movies.find(item => item.id === movieId);

if (!movie) {
  document.body.innerHTML = "<h1 style='color:white;text-align:center'>Movie not found</h1>";
} else {
  document.title = "Watchly — " + movie.title;

  const player = document.getElementById("videoPlayer");
  const title = document.getElementById("movieTitle");

  if (title) {
    title.textContent = movie.title;
  }

  if (player && movie.video) {
    player.src = movie.video;
  }
}
