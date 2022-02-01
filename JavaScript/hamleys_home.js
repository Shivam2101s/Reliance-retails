var category = document.getElementById("category_container");

function showAbout() {
  category.style.display = "block";
}

function endAbout() {
  category.style.display = "none";
}

let age_data = [
  {
    age: "https://hamleysgumlet.gumlet.io/category/1623135001Age%20group%20banner-01.jpg?w=240&dpr=1.0",
  },
  {
    age: "https://hamleysgumlet.gumlet.io/category/1623135265Age%20group%20banner-02.jpg?w=240&dpr=1.0",
  },
  {
    age: "https://hamleysgumlet.gumlet.io/category/1623135302Age%20group%20banner-03.jpg?w=240&dpr=1.0",
  },
  {
    age: "https://hamleysgumlet.gumlet.io/category/1623135347Age%20group%20banner-04.jpg?w=240&dpr=1.0",
  },
  {
    age: "https://hamleysgumlet.gumlet.io/category/1623135391Age%20group%20banner-05.jpg?w=240&dpr=1.0",
  },
  {
    age: "https://hamleysgumlet.gumlet.io/category/1623135441Age%20group%20banner-06.jpg?w=240&dpr=1.0",
  },
  {
    age: "https://hamleysgumlet.gumlet.io/category/1623135487Age%20group%20banner-07.jpg?w=240&dpr=1.0",
  },
];

// console.log(age_data);
let age_container = document.getElementById("age_container");

// function showAge(age_data){
//     age_container.style.display = "block";

//     age_data.forEach((data)=>{

//         console.log(data.age);
//         // let div = document.createElement("div");

//         // let image = document.createElement("img");
//         // image.src = data.age;

//         // div.append(image);
//         // age_container.append(div);

//     })
// }

// function endAge(){
//     age_container.style.display = "none";
// }

// data for appending products in container

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

let parent = document.getElementById("container");

function showProduct(data) {
  data.forEach((product) => {
    let div = document.createElement("div");
    div.setAttribute("class", "toysDiv");

    let name = document.createElement("p");
    name.setAttribute("class", "toyName");
    name.innerText = product.name;

    let price = document.createElement("p");
    price.setAttribute("class", "toyPrice");
    price.innerText = `₹ ${product.price}`;

    let image = document.createElement("img");
    image.src = product.img;

    let btn = document.createElement("button");
    btn.setAttribute("class", "addCartbtn");
    btn.innerHTML = ` Add to Cart <i class="fas fa-shopping-bag">`;
    btn.onclick = function () {
      add_to_cart(product);
    };

    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "imgDiv");

    let detailDiv = document.createElement("div");
    detailDiv.setAttribute("class", "detailDiv");

    imgDiv.append(image, btn);
    detailDiv.append(name, price);
    div.append(imgDiv, detailDiv);
    parent.append(div);
  });
}

showProduct(data);

if (localStorage.getItem("hamley_cart") === null) {
  localStorage.setItem("hamley_cart", JSON.stringify([]));
}

function add_to_cart(item) {
  let product_cart = JSON.parse(localStorage.getItem("hamley_cart"));

  let count = 0;

  for (let i = 0; i < product_cart.length; i++) {
    if (product_cart[i].name == item.name) {
      count++;
    }
  }

  if (count > 0) {
    alert("product already there in cart");
  } else {
    product_cart.push(item);
  }

  localStorage.setItem("hamley_cart", JSON.stringify(product_cart));
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

// sorting
function sortWithPrice() {
  let sortings = document.getElementById("sortbyPrice").value;
  let div = document.getElementById("container");
  div.innerHTML = null;

  if (sortings == "lowtoHigh") {
    let newData = data.sort(function (a, b) {
      return a.price - b.price;
    });
    console.log(newData);
    showProduct(newData);
  } else if (sortings == "HighToLow") {
    let newData = data.sort(function (a, b) {
      return b.price - a.price;
    });
    console.log(newData);
    showProduct(newData);
  }
}

// filtering function

function checkAll() {
  let input = document.querySelectorAll(".check");
  let checkBox = [];
  let desiredData = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i].checked) {
      checkBox.push(input[i].value);
    }
  }
  console.log("checked", checkBox);
  for (let i = 0; i < checkBox.length; i++) {
    data.forEach((product) => {
      if (product.category == checkBox[i]) {
        desiredData.push(product);
      }
    });
  }

  console.log(desiredData, "desired data");
  parent.innerHTML = null;
  showProduct(desiredData);
  if (desiredData.length == 0) {
    showProduct(data);
  }
}


function gotoHome() {
 window.location.assign("../HTML/hamleys_home.html") 
}