const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

let arrow = document.querySelector('.arrow');
let banner = document.querySelector('#banner');
const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');


arrow_left.addEventListener('click', function (ChangeSlide){ alert("Changement d'image vers la gauche");});
arrow_right.addEventListener('click', function (ChangeSlide){ alert("Changement d'image vers la droite");});

let numero = 0;


function ChangeSlide() {
	document.getElementById("slide"). src = "./assets/images/slideshow/" + slides[1];
	/*numero = numero + sens;
    if (numero < 0)
        numero = slides.length - 1;
    if (numero > slides.length - 1)
        numero = 0;*/
};

function prev() {
	ChangeSlide( - 1);
  }

function next() {
	ChangeSlide( + 1);
  }

ChangeSlide();
next;
prev;





console.log(slides[numero])





/*arrow.addEventListener('click', (event) => {
	if(event.button == 0) {
		{alert ("Left click detected")}
		console.log("Left click detected")
	}else{
		{alert ("Right click detected")};
	}
});*/





/*arrow.addEventListener('click', function(){ alert("Left click detected")});*/




