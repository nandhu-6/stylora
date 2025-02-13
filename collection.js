// import {products} from  "./products.js";

//close offer banner
var close = document.getElementById("close")
var offerBanner = document.getElementById("offer-banner")

close.addEventListener("click", function(){
    offerBanner.style.display = "none"
})


// side menu bar
var menuBar = document.getElementById("menu-bar-activate");
var sideBar = document.querySelector(".side-bar");

menuBar.addEventListener("click", function(){
    sideBar.style.marginRight = "0px";
})

var sideBarClose = document.getElementById("side-bar-close")
sideBarClose.addEventListener("click", function(){
    sideBar.style.marginRight = "-60%"
})


const shirtsData = [
    { id: 1, name: "Brown Slip Fit Shirt", src: "products/n7.jpg", price: 450, tags: ["formals", "brown", "men"] },
    { id: 2, name: "Printed Shirt", src: "products/n4.jpg", price: 410, tags: ["party", "brown", "men"] },
    { id: 3, name: "Floral Summer Shirt", src: "products/f4.jpg", price: 420, tags: ["summer", "white", "men"] },
    { id: 4, name: "Blue Formal", src: "products/n5.jpg", price: 469, tags: ["formals", "blue", "men"] },
    { id: 5, name: "White Shirt", src: "products/n3.jpg", price: 450, tags: ["formals", "white", "men"] },
    { id: 6, name: "Women Printed Top", src: "products/f8.jpg", price: 510, tags: ["party", "grey", "women"] },
    { id: 7, name: "Grey Trousers", src: "products/n6.jpg", price: 350, tags: ["summer", "grey", "men"] },
    { id: 8, name: "Dual Colored Shirt", src: "products/f6.jpg", price: 499, tags: ["party", "red", "men"] },
    { id: 9, name: "Women Trousers", src: "products/f7.jpg", price: 480, tags: ["summer", "brown", "women"] }
];

const shirtsContainer = document.querySelector(".shirts");
const checkboxes = document.querySelectorAll("input[name='tags']");

function filterShirts() {
    let selectedTags = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    
    let filteredShirts = shirtsData.filter(shirt => 
        selectedTags.length === 0 || selectedTags.some(tag => shirt.tags.includes(tag))
    );
    
    displayShirts(filteredShirts);
}

function displayShirts(shirts) {
    shirtsContainer.innerHTML = "";
    shirts.forEach(shirt => {
        const shirtCard = document.createElement("div");
        shirtCard.classList.add("shirt-card");
        shirtCard.innerHTML = `
            <img src="./images/${shirt.src}" alt="${shirt.name}">
            <h3>${shirt.name}</h3>
            <p>&#8377;${shirt.price}</p>
        `;
        shirtsContainer.appendChild(shirtCard);
    });
}

checkboxes.forEach(checkbox => checkbox.addEventListener("change", filterShirts));

displayShirts(shirtsData);

