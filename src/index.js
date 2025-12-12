import "./styles.css";

const img = document.querySelector("img");

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=GUPIKph3Ma7PhSBobqWJzO56PaWgQmir&s=cats",
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });
