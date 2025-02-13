//close offer banner
var close = document.getElementById("close")
var offerBanner = document.getElementById("offer-banner")

close.addEventListener("click", function () {
    offerBanner.style.display = "none"
})


// side menu bar
var menuBar = document.getElementById("menu-bar-activate");
var sideBar = document.querySelector(".side-bar");

menuBar.addEventListener("click", function () {
    sideBar.style.marginRight = "0px";
})

var sideBarClose = document.getElementById("side-bar-close")
sideBarClose.addEventListener("click", function () {
    sideBar.style.marginRight = "-60%"
})

// slider
// the idea is to push image when button is clicked
// we have 3 images in the container
// -100 to marginleft or right will do the job
var sliderImage = document.querySelector(".slider__image-container")
var leftButton = document.getElementById("slider__left-arrow")
var rightButton = document.getElementById("slider__right-arrow")

var sliderMargin = 0;


rightButton.addEventListener("click", function () {
    sliderMargin = sliderMargin + 100;

    if (sliderMargin > 200) {
        sliderImage.style.marginLeft = 0;
        sliderMargin = 0; //reset
    }
    else {
        sliderImage.style.marginLeft = "-" + sliderMargin + "vw";
        // make margin left : -100vw the first click
        // -200vw the second click, -300 the third
        // 0 the fourth click
    }
})


leftButton.addEventListener("click", function () {
    if (sliderMargin == 0) {
        sliderMargin = 200; // Move to last image when at the first image
    } else {
        sliderMargin -= 100;
    }

    sliderImage.style.marginLeft = "-" + sliderMargin + "vw";
});

//like button
var likeButtons = document.querySelectorAll(".like-button")
// selecting all like buttons

likeButtons.forEach((btn) => {
    btn.addEventListener("click", function(event){
        if(event.target.src.indexOf("blackheart")>0){ //img is targeted
            event.target.src = "./images/redheart.png"
        }
        else{
            event.target.src = "./images/blackheart.png"

        }
    })
})

// Assume the image source (event.target.src) is:


// event.target.src = "https://example.com/images/blackheart.png";
// "blackheart" is present at index 25.
// So event.target.src.indexOf("blackheart") returns 25 (which is > 0).
// This means "blackheart" exists in the string.


// OR
// let imgSrc = event.target.src;

//         if (imgSrc.endsWith("blackheart.png")) {
//             event.target.src = "./images/redheart.png";
//         } else {
//             event.target.src = "./images/blackheart.png";
//         }




