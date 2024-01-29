let cart = document.getElementById("cart");
let viewBtn = document.querySelectorAll(".shopcard");

cart.addEventListener("click", function(){
    document.querySelector(".container").innerHTML="";
    document.querySelector("body").innerHTML='<a href="" class="cartHead">Cart is Empty</a>';

})
viewBtn.forEach(function(cart){
    cart.addEventListener("click", function(){
        
       let div = document.createElement("div");
       div.classList.add("card");
       div.innerHTML=`
       <img src=${cart.firstElementChild.src} alt="">
      <div>
      <h1>The Trendy Wear at NAVI's </h1>
      <h1>Only Rs.2500</h1>
      <br/>
      <p>From affordable styles to luxury brands</p>
      <p>showcases a wide array of styles with loyal customers all across India</p>
      <p>NAVI's is India's leading fashion and lifestyle destination </p>
      <a href="">Order Now</a>
      </div>
       `
    document.querySelector(".container").innerHTML="";
    document.querySelector("body").appendChild(div)
    })
})