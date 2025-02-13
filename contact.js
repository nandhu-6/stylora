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