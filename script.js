// Sayfa başına dönme

const logo = document.getElementById("turn-top");

logo.addEventListener("click", turnTop);

function turnTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
