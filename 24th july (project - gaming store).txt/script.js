const carousel = document.getElementById("carousel");

function scrollLeft() {
  carousel.scrollBy({ left: -200, behavior: 'smooth' });
}

function scrollRight() {
  carousel.scrollBy({ left: 200, behavior: 'smooth' });
}