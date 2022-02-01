// header links

var abt_div = document.querySelector(".aboutus-container");
abt_div.style.display = "none";

function showAbout() {
  abt_div.style.display = "block";
}
function endAbout() {
  abt_div.style.display = "none";
}

var brd_div = document.querySelector(".ourbrands-container");
brd_div.style.display = "none";

function showBrands() {
  brd_div.style.display = "block";
}
function endBrands() {
  brd_div.style.display = "none";
}

var inv_div = document.querySelector(".investor-container");
inv_div.style.display = "none";

function showInvestor() {
  inv_div.style.display = "block";
}
function endInvestor() {
  inv_div.style.display = "none";
}

var car_div = document.querySelector(".career-container");
car_div.style.display = "none";

function showCareer() {
  car_div.style.display = "block";
}
function endCareer() {
  car_div.style.display = "none";
}

// go to top

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Go to home page

function goToHome() {
  window.location.assign("../index.html");
}

// Open hamleys website 

function openHamleys() {
  window.location.assign("../HTML/hamleys_home.html")
}