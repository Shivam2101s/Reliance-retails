
var category = document.getElementById("category_container");

function showAbout(){
    category.style.display = "block";
}

function endAbout(){

    category.style.display = "none";
}


// let age_data = [
//     {age:"https://hamleysgumlet.gumlet.io/category/1623135001Age%20group%20banner-01.jpg?w=240&dpr=1.0"},
//     {age:"https://hamleysgumlet.gumlet.io/category/1623135265Age%20group%20banner-02.jpg?w=240&dpr=1.0"},
//     {age:"https://hamleysgumlet.gumlet.io/category/1623135302Age%20group%20banner-03.jpg?w=240&dpr=1.0"},
//     {age:"https://hamleysgumlet.gumlet.io/category/1623135347Age%20group%20banner-04.jpg?w=240&dpr=1.0"},
//     {age: "https://hamleysgumlet.gumlet.io/category/1623135391Age%20group%20banner-05.jpg?w=240&dpr=1.0"},
//     {age: "https://hamleysgumlet.gumlet.io/category/1623135441Age%20group%20banner-06.jpg?w=240&dpr=1.0",},
//     {age: "https://hamleysgumlet.gumlet.io/category/1623135487Age%20group%20banner-07.jpg?w=240&dpr=1.0",}
// ];

// console.log(age_data);
// let age_container = document.getElementById("age_container");

// function showAge(age_data){
//     age_container.style.display = "block";

//     age_data.forEach((data)=>{

//         console.log(data.age);
//         // let div = document.createElement("div");

//         // let image = document.createElement("img");
//         // image.src = data;

//     })
// }

// data for appending products in container

let data = [
    {
        id:1,
        name: "Hamleys Blow In The Dark Action Tracks-220Pcs Tracksets & Train Sets for Kids age 3Y+",
        img:"https://hmadmin.hamleys.in/product/491490265/300/491490265.jpg",
        price:"3000"
    },

    {
        id:2,
        name: "Sparkle Girlz Playset- Assorted Dolls & Accessories for Girls age 3Y+",
        img:"https://hmadmin.hamleys.in/product/491902369/300/491902369-1.jpg",
        price:"4000"
    },
    {
        id:3,
        name: "Ralleyz 3\" Die Cast Car 25 Pack Assorted Vehicles Vehicles for Kids age 3Y+",
        img:"https://hmadmin.hamleys.in/product/491602984/300/491602984-1.jpg",
        price:"4999"
    },
    {
        id:4,
        name: "Dc Batman 1995 Batmobile 1:32 Vehicles for Kids age 8Y+ (Black)",
        img:"https://hmadmin.hamleys.in/product/491634949/300/491634949-1.jpg",
        price:"5999"
    },
    {
        id:5,
        name: "Hamleys Glow In The Dark Action Track 132 Pieces Set Tracksets & Train Sets for Kids age 3Y+",
        img:"https://hmadmin.hamleys.in/product/491490266/300/491490266.jpg",
        price:"2299"
    },
    {
        id:6,
        name: "Hamleys London Double Decker Bus (Red) Vehicles for Kids age 3Y+ (Red)",
        img:"https://hmadmin.hamleys.in/product/490658076/300/490658076-1.jpg",
        price:"5899"
    },
    {
        id:7,
        name: "Dihua Pull Back Track & Train Set for Kids age 3Y+",
        img:"https://hmadmin.hamleys.in/product/491602653/300/491602653-1.jpg",
        price:"5849"
    },
    {
        id:8,
        name: "Hamleys London Bus And Taxi Playset (Red) Vehicles for Kids age 3Y+ (Red)",
        img:"https://hmadmin.hamleys.in/product/491298552/300/491298552-1.jpg",
        price:"9599"
    },
    {
        id:9,
        name: "MSZ 1:31 Honda Acura NSX Car with Light and Sound for Kids age 3Y+ (Blue)",
        img:"https://hmadmin.hamleys.in/product/491394449/300/491394449.jpg",
        price:"4999"
    },
    {
        id:10,
        name: "MSZ 1:32 Bentley Continental GT3 Car with Light and Sound for Kids age 3Y+",
        img:"https://hmadmin.hamleys.in/product/491394452/300/491394452.jpg",
        price:"6959"
    },
    {
        id:11,
        name: "Ralleyz BUILDING MACHINES Vehicles for Kids age 3Y+",
        img:"https://hmadmin.hamleys.in/product/491603022/300/491603022-1.jpg",
        price:"3949"
    },
    {
        id:12,
        name: "Turbo Trax 192 PCS Track and Car Set for Kids age 3Y+",
        img:"https://hmadmin.hamleys.in/product/491277505/300/491277505-1.jpg",
        price:"2199"
    },
    {
        id:13,
        name: "Teamsterz 3\" Die Cast Emergency Station Play Set Vehicles for Kids Age 3Y+",
        img:"https://hmadmin.hamleys.in/product/491568381/300/491568381-1.jpg",
        price:"1859"
    },
    {
        id:14,
        name: "Ralleyz Car Transporter - 10 Cars Vehicles for Kids age 3Y+",
        img:"https://hmadmin.hamleys.in/product/491603027/300/491603027-1.jpg",
        price:"3989"
    },
    {
        id:15,
        name: "Ralleyz Light And Sound Helicopter- Small Vehicles for Kids age 3Y+",
        img:"https://hmadmin.hamleys.in/product/491602993/300/491602993-1.jpg",
        price:"7949"
    },
    {
        id:16,
        name: "Teamsterz Light And Sound Ambulance Vehicles for Kids age 3Y+",
        img:"https://hmadmin.hamleys.in/product/491568392/300/491568392-1.jpg",
        price:"3919"
    }
]

let parent = document.getElementById("container");

function showProduct(){

    data.forEach((product)=>{

        let div = document.createElement("div");

        let name = document.createElement("p");
        name.innerText = product.name;

        let price = document.createElement("p");
        price.innerText = product.price;

        let image = document.createElement("img");
        image.src = product.img;

        let btn = document.createElement("button");
        btn.innerText = "Add to Cart";
        btn.onclick = function(){
            add_to_cart(product);
        }

        div.append(image,name, price, btn);
        parent.append(div);
    })
}

showProduct();

if(localStorage.getItem("hamley_cart") === null){

    localStorage.setItem("hamley_cart", JSON.stringify([]));
}

function add_to_cart(item){
    
    let product_cart = JSON.parse(localStorage.getItem("hamley_cart"));
    
    let count = 0;

    for(let i = 0 ; i < product_cart.length; i++){

        if(product_cart[i].name == item.name){
           count++;

        }
    }

    if(count > 0){
        alert("product already there in cart");

    }else{
        product_cart.push(item);
    }

    localStorage.setItem("hamley_cart",JSON.stringify(product_cart));
}