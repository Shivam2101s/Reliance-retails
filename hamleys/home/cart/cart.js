let data = JSON.parse(localStorage.getItem("hamley_cart"));

let container = document.getElementById("cart_container");

function show_cart(){

    data.forEach((item)=>{

        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = item.img;

        let name = document.createElement("p");
        name.innerText = item.name;

        let price = document.createElement("p");
        price.innerText = item.price;

        div.append(image, name, price);

        container.append(div);
    });
}

show_cart();

let container_2 = document.getElementById("details");

function totalPrice(){

    let cart = JSON.parse(localStorage.getItem("hamley_cart"));

    let total_price = document.createElement("p");
    let total_product = document.createElement("p");

    let sum = 0;

    for(let i = 0 ; i< cart.length; i++){

        sum+= Number(cart[i].price);
    }

    let apply_promo = document.getElementById("apply_promo");
    apply_promo.onclick = function(){
        applyPromo( sum , container_2);
    }

    total_product.innerText = "Number of products" + cart.length;
    total_price.innerText = "Total Price" + sum;

    container_2.append(total_product, total_price);

    
}
totalPrice();

let final = document.createElement("p");
function applyPromo(s, c){

    let promo = document.getElementById("promo").value;
    
    final.innerText = null;

    if(promo == "masai30"){

        s -= s*0.3;
        final.textContent = "Final Price is=" + s;
        c.append(final);

    }else{
        alert("invalid Promo");
    }
}
