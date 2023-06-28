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

/* Essai 1 *//*
let div = document.querySelector('#current_dot');
for (let cssClass of div.classList) {
    console.log(cssClass);
    div.className += " dot_selected";
}*/

/* Essai 2 *//*
current_slide.classList.add('dot_selected');
*/

/* Essai 3 *//*
document.getElementById(current_slide).classList.add("dot_selected");
*/


function previous_slide() {	
  current_slide--;
  console.log(current_slide);
  if (current_slide < 0) {
    current_slide = slides.length - 1;
  }
  document.getElementById("slide").src =
    "./assets/images/slideshow/" + slides[current_slide].image;	
}

function next_slide() {
  if (current_slide == 3) {
    current_slide = 0;
    document.getElementById("slide").src =
      "./assets/images/slideshow/" + slides[current_slide].image;
  } else {
    document.getElementById("slide").src =
      "./assets/images/slideshow/" + slides[current_slide + 1].image;
  }
  current_slide++;
  console.log(current_slide);
}


arrow_left.addEventListener("click", previous_slide);
arrow_right.addEventListener("click", next_slide);


