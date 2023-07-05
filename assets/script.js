const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let arrow = document.querySelector(".arrow");
let banner = document.querySelector("#banner");
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

let current_slide = 0;

function updateBullet() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => dot.classList.remove("dot_selected"));
  dots[current_slide].classList.add("dot_selected");
}

function updateTagLine() {
  const tagLineElement = document.getElementById("tagLine");
  tagLineElement.innerHTML = slides[current_slide].tagLine;
  document.getElementById("tagLine").src =
  "./assets/images/slideshow/" + slides[current_slide].tagLine; 
}

function previous_slide() {
  current_slide--;
  console.log(tagLine);
  if (current_slide < 0) {
    current_slide = slides.length - 1;
  }
  document.getElementById("slide").src =
    "./assets/images/slideshow/" + slides[current_slide].image;
  updateBullet();
  updateTagLine();
}

function next_slide() {
  current_slide++;
  if (current_slide > 3) {
    current_slide = 0;
  }
  document.getElementById("slide").src =
    "./assets/images/slideshow/" + slides[current_slide].image;
  console.log(tagLine);
  updateBullet();
  updateTagLine();
}

arrow_left.addEventListener("click", previous_slide);
arrow_right.addEventListener("click", next_slide);
