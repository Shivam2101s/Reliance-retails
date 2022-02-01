let data = [
  {
    id: 1,
    name: "Hamleys Blow In The Dark Action",
    img: "https://hmadmin.hamleys.in/product/491490265/300/491490265.jpg",
    price: "3000",
    category: "train",
    age: 2,
  },

  {
    id: 2,
    name: "Sparkle Girlz Playset- Assorted Dolls & Accessories for Girls",
    img: "https://hmadmin.hamleys.in/product/491902369/300/491902369-1.jpg",
    price: "4000",
    category: "doll",
    age: 2,
  },
  {
    id: 3,
    name: 'Ralleyz 3" Die Cast Car 25 Pack Assorted Vehicles',
    img: "https://hmadmin.hamleys.in/product/491602984/300/491602984-1.jpg",
    price: "4999",
    category: "car",
    age: 2,
  },
  {
    id: 4,
    name: "Dc Batman 1995 Batmobile 1:32 Vehicles",
    img: "https://hmadmin.hamleys.in/product/491634949/300/491634949-1.jpg",
    price: "5999",
    category: "car",
    age: 2,
  },
  {
    id: 5,
    name: "Hamleys Glow In The Dark Action Track",
    img: "https://hmadmin.hamleys.in/product/491490266/300/491490266.jpg",
    price: "2299",
    category: "train",
    age: 3,
  },
  {
    id: 6,
    name: "Hamleys London Double Decker Bus",
    img: "https://hmadmin.hamleys.in/product/490658076/300/490658076-1.jpg",
    price: "5899",
    category: "bus",
    age: 3,
  },
  {
    id: 7,
    name: "Dihua Pull Back Track & Train",
    img: "https://hmadmin.hamleys.in/product/491602653/300/491602653-1.jpg",
    price: "5849",
    category: "train",
    age: 3,
  },
  {
    id: 8,
    name: "Hamleys London Bus And Taxi Playset",
    img: "https://hmadmin.hamleys.in/product/491298552/300/491298552-1.jpg",
    price: "9599",
    category: "bus",
    age: 3,
  },
  {
    id: 9,
    name: "MSZ 1:31 Honda Acura NSX Car with Light and Sound for Kids",
    img: "https://hmadmin.hamleys.in/product/491394449/300/491394449.jpg",
    price: "4999",
    category: "car",
    age: 4,
  },
  {
    id: 10,
    name: "MSZ 1:32 Bentley Continental GT3 Car with Light and Sound",
    img: "https://hmadmin.hamleys.in/product/491394452/300/491394452.jpg",
    price: "6959",
    category: "car",
    age: 4,
  },
  {
    id: 11,
    name: "Ralleyz BUILDING MACHINES Vehicles",
    img: "https://hmadmin.hamleys.in/product/491603022/300/491603022-1.jpg",
    price: "3949",
    category: "jcb",
    age: 4,
  },
  {
    id: 12,
    name: "Turbo Trax 192 PCS Track and Car Set",
    img: "https://hmadmin.hamleys.in/product/491277505/300/491277505-1.jpg",
    price: "2199",
    category: "train",
    age: 4,
  },
  {
    id: 13,
    name: 'Teamsterz 3" Die Cast Emergency Station Play Set Vehicles',
    img: "https://hmadmin.hamleys.in/product/491568381/300/491568381-1.jpg",
    price: "1859",
    category: "block",
    age: 5,
  },
  {
    id: 14,
    name: "Ralleyz Car Transporter",
    img: "https://hmadmin.hamleys.in/product/491603027/300/491603027-1.jpg",
    price: "3989",
    category: "truck",
    age: 5,
  },
  {
    id: 15,
    name: "Ralleyz Light And Sound Helicopter- Small Vehicles",
    img: "https://hmadmin.hamleys.in/product/491602993/300/491602993-1.jpg",
    price: "7949",
    category: "helicopter",
    age: 5,
  },
  {
    id: 16,
    name: "Teamsterz Light And Sound Ambulance Vehicles",
    img: "https://hmadmin.hamleys.in/product/491568392/300/491568392-1.jpg",
    price: "3919",
    category: "ambulance",
    age: 5,
  },
];

let category = document.getElementById("category_container");

function showAbout() {
  category.style.display = "block";
}

function endAbout() {
  category.style.display = "none";
}

let parent = document.getElementById("bag");

let cart = JSON.parse(localStorage.getItem("hamley_cart"));

function show_cart() {
  cart.forEach((item) => {
    let div = document.createElement("div");
    div.setAttribute("class", "productDiv");

    let image = document.createElement("img");
    image.src = item.img;

    let name = document.createElement("p");
    name.setAttribute("id", "productName");
    name.innerText = item.name;

    let price = document.createElement("p");
    price.setAttribute("id", "productPrice");
    price.innerText = `₹ ${item.price}`;

    div.append(image, name, price);

    parent.append(div);
  });
}
show_cart();

let totalDiv = document.getElementById("total");

function totalPrice() {
  let total_product = document.createElement("p");

  let total_price = document.createElement("p");

  let sum = 0;

  for (let i = 0; i < cart.length; i++) {
    sum += Number(cart[i].price);
  }

  let apply_promo = document.getElementById("couponBtn");

  apply_promo.onclick = function () {
    applyPromo(sum, totalDiv);
  };

  total_product.innerText = "Items : " + cart.length;

  total_price.innerText = "Total Price : ₹ " + sum;

  totalDiv.append(total_product, total_price);
}

totalPrice();

let final = document.createElement("p");

function applyPromo(s, c) {
  let promo = document.getElementById("promo").value;

  final.innerText = null;

  if (promo == "NEW30") {
    s -= s * 0.3;
    final.textContent = "Discounted Price : ₹ " + s;
    c.append(final);
    alert("Voucher Applied Successfully");
  } else if (promo == "NEW10") {
    s -= s * 0.1;
    final.textContent = "Discounted Price : ₹ " + s;
    c.append(final);
    alert("Voucher Applied Successfully");
  } else if (promo == "DIWALI") {
    s -= s * 0.5;
    final.textContent = "Discounted Price : ₹ " + s;
    c.append(final);
    alert("Voucher Applied Successfully");
  } else {
    alert("Invalid Voucher Code");
  }
}

//  search funtions
let timerId;
let searchContainer = document.getElementById("showSearch");

function search(str) {
  searchContainer.innerHTML = null;
  str = str.toLowerCase();
  if (str.length == 0) {
    searchContainer.style.display = "none";
  } else {
    searchContainer.style.display = "block";
  }

  data.forEach(function (product) {
    let to_check = product.name;
    to_check = to_check.toLowerCase();
    let arr = to_check.trim().split(" ");
    // console.log("arr", arr);

    if (arr.includes(str)) {
      let div = document.createElement("div");
      div.setAttribute("id", "smallDiv");

      // let innerdiv = document.createElement("div");

      let image = document.createElement("img");
      image.src = product.img;

      let name = document.createElement("p");
      name.innerText = product.name;

      div.append(image, name);
      searchContainer.append(div);

      console.log(product.price);
    }
  });
}

function main() {
  let name = document.getElementById("search").value;

  search(name);
}

function debounce(func, delay) {
  if (timerId) {
    clearTimeout(timerId);
  }

  timerId = setTimeout(function () {
    func();
  }, delay);
}

// clear cart function

function clearCart() {
  localStorage.removeItem("hamley_cart");
    window.location.reload();
    alert("Cart Cleared Successfully !!")
}

function checkout() {
  window.location.assign("../HTML/hamleys_checkout.html");
}

function gotoHome() {
  window.location.assign("../HTML/hamleys_home.html") 
}