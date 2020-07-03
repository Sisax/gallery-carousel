//variables

let imageSlide = document.querySelector(".image");
let imageContainer = document.querySelectorAll(".big-image-container");
let leftButton = document.querySelector("#left-button");
let rightButton = document.querySelector("#right-button");
let counter = 1;
const size = imageContainer[0].clientWidth;

//képváltás

imageSlide.style.transform = "translateX(" + (-size * counter) + "px)";

//gombok

rightButton.addEventListener("click", () => {
    if (counter >= imageContainer.length - 1) {
        return
    };
    imageSlide.style.transition = "transform 0.2s ease-in-out";
    counter++;
    console.log(counter);
    imageSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

leftButton.addEventListener("click", () => {
    if (counter <= 0) {
        return
    };
    imageSlide.style.transition = "transform 0.2s ease-in-out";
    counter--;
    console.log(counter);
    imageSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

//képek utáni visszaugrás

imageSlide.addEventListener("transitionend", () => {
    if (imageContainer[counter].id === "lastClone"){
        imageSlide.style.transition = "none";
        counter = imageContainer.length - 2;
        imageSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
    if (imageContainer[counter].id === "firstClone"){
        imageSlide.style.transition = "none";
        counter = 1;
        imageSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
})

