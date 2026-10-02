document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(
    'a[href*="watch.html"], a[href*="movie.html"]'
  );

  buttons.forEach(function (button) {

    button.addEventListener("click", function (event) {
      event.preventDefault();

      window.location.href = "player.html";
    });

  });

});
