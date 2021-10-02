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
  window.location.assign("./index.html");
}

// Our brands Corousel

let preBtn = document.querySelector('#preBtn');
let nextBtn = document.querySelector('#nextBtn');

	let product = document.getElementsByClassName('product')
	let product_page = Math.ceil(product.length/4);
	let l = 0;
	let movePer = 25.34;
	let maxMove = 203;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}

	preBtn.onclick = ()=>{left_mover();}
	nextBtn.onclick = ()=>{right_mover();}