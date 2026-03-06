let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

function autoSlide(){

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

document.getElementById("slideTrack").style.transform =
"translateX(-" + currentSlide*100 + "%)";

}

setInterval(autoSlide,4000);



function getInspiration(){

const quotes = [

"Women are the real architects of society.",

"Empowered women empower the world.",

"Your courage can change history.",

"Strong women build strong nations.",

"The future is bright because women are rising."

];

const box = document.getElementById("quoteBox");

const random = quotes[Math.floor(Math.random()*quotes.length)];

box.style.opacity=0;

setTimeout(()=>{

box.innerText=random;
box.style.opacity=1;

},300);

}