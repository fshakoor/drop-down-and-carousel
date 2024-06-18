let body = document.querySelector("body");

let dropDownHeader = document.createElement("h1");
dropDownHeader.innerHTML = "Drop Down Menu";
body.appendChild(dropDownHeader);

let dropDown = document.createElement("div");
dropDown.classList.add("drop-down");

let dropDownMain = document.createElement("div");
dropDownMain.classList.add("drop-down-main");

let dropDownOptions = document.createElement("div");
dropDownOptions.classList.add("drop-down-options");
dropDownOptions.classList.add("hidden");

let optionOne = document.createElement("div");
optionOne.classList.add("option");
optionOne.innerHTML = "Red";

let optionTwo = document.createElement("div");
optionTwo.classList.add("option");
optionTwo.innerHTML = "Blue";

let optionThree = document.createElement("div");
optionThree.classList.add("option");
optionThree.innerHTML = "Green";

dropDownOptions.appendChild(optionOne);
dropDownOptions.appendChild(optionTwo);
dropDownOptions.appendChild(optionThree);

let dropDownMainText = document.createElement("div");
dropDownMainText.innerHTML = "Select";

let dropDownMainTriangle = document.createElement("div");
dropDownMainTriangle.innerHTML = "-";
dropDownMainTriangle.classList.add("drop-down-main-triangle");

dropDownMain.appendChild(dropDownMainText);
dropDownMain.appendChild(dropDownMainTriangle);

dropDown.appendChild(dropDownMain);
dropDown.appendChild(dropDownOptions);

body.appendChild(dropDown);

let isDropDownOn = false;

dropDownMain.addEventListener("click", () => {
  toggleDropDown();
});

dropDownOptions.childNodes.forEach((element) => {
  element.addEventListener("click", () => {
    dropDownMainText.innerHTML = element.innerHTML;
    toggleDropDown();
  });
});

function toggleDropDown() {
  if (isDropDownOn == false) {
    dropDownOptions.classList.remove("hidden");
    dropDownMainTriangle.innerHTML = "+";
    isDropDownOn = true;
  } else {
    dropDownOptions.classList.add("hidden");
    dropDownMainTriangle.innerHTML = "-";
    isDropDownOn = false;
  }
}

let carouselHeader = document.createElement("h1");
carouselHeader.innerHTML = "Image Carousel";
body.appendChild(carouselHeader);

let carousel = document.createElement("div");
carousel.classList.add("carousel");
let mainCarouselImage = document.createElement("img");
mainCarouselImage.classList.add("main-carousel-image");
let forwardCarouselImage = document.createElement("img");
forwardCarouselImage.classList.add("forward-carousel-image");
forwardCarouselImage.classList.add("not-main-image");
let backwardCarouselImage = document.createElement("img");
backwardCarouselImage.classList.add("backward-carousel-image");
backwardCarouselImage.classList.add("not-main-image");

let forwardButton = document.createElement("button");
forwardButton.innerHTML = ">";
let backwardButton = document.createElement("button");
backwardButton.innerHTML = "<";

let imagesArray = [
  "assets/1.jpg",
  "assets/2.jpg",
  "assets/3.jpg",
  "assets/4.jpg",
];
backwardCarouselImage.src = imagesArray[3];
mainCarouselImage.src = imagesArray[0];
forwardCarouselImage.src = imagesArray[1];

let backImageIndex = parseInt(
    backwardCarouselImage.src[backwardCarouselImage.src.length - 5]
  );
  let forwardImageIndex = parseInt(
    forwardCarouselImage.src[forwardCarouselImage.src.length - 5]
  );
  let mainImageIndex = parseInt(
    mainCarouselImage.src[mainCarouselImage.src.length - 5]
  );

  backImageIndex=backImageIndex-1
  mainImageIndex=mainImageIndex-1
  forwardImageIndex=forwardImageIndex-1

function advanceCarouselFoward() {
  backImageIndex=backImageIndex+1
  mainImageIndex=mainImageIndex+1
  forwardImageIndex=forwardImageIndex+1
  if (backImageIndex > 3) {backImageIndex = 0}
  if (mainImageIndex > 3) {mainImageIndex = 0}
  if (forwardImageIndex > 3) {forwardImageIndex = 0}

  backwardCarouselImage.src = imagesArray[backImageIndex]
  mainCarouselImage.src = imagesArray[mainImageIndex]
  forwardCarouselImage.src = imagesArray[forwardImageIndex]
}

function advanceCarouselBackward() {
    backImageIndex=backImageIndex-1
    mainImageIndex=mainImageIndex-1
    forwardImageIndex=forwardImageIndex-1
    if (backImageIndex < 0) {backImageIndex = 3}
    if (mainImageIndex < 0) {mainImageIndex = 3}
    if (forwardImageIndex < 0) {forwardImageIndex = 3}
  
    backwardCarouselImage.src = imagesArray[backImageIndex]
    mainCarouselImage.src = imagesArray[mainImageIndex]
    forwardCarouselImage.src = imagesArray[forwardImageIndex]
}

forwardButton.addEventListener("click", () => {
    advanceCarouselFoward();
})

backwardButton.addEventListener("click", () => {
    advanceCarouselBackward();
})

carousel.appendChild(backwardButton);
carousel.appendChild(backwardCarouselImage);
carousel.appendChild(mainCarouselImage);
carousel.appendChild(forwardCarouselImage);
carousel.appendChild(forwardButton);

let slider = document.createElement('div');
slider.classList.add('slider');
let sliderOptionOne = document.createElement('button');
let sliderOptionTwo = document.createElement('button');
let sliderOptionThree = document.createElement('button');
let sliderOptionFour = document.createElement('button');

sliderOptionOne.classList.add('slider-option')
sliderOptionTwo.classList.add('slider-option')
sliderOptionThree.classList.add('slider-option')
sliderOptionFour.classList.add('slider-option')
sliderOptionOne.classList.add('active')

slider.appendChild(sliderOptionOne)
slider.appendChild(sliderOptionTwo)
slider.appendChild(sliderOptionThree)
slider.appendChild(sliderOptionFour)

let carouselHolder = document.createElement('div');
carouselHolder.classList.add('carousel-holder')
carouselHolder.appendChild(carousel)
carouselHolder.appendChild(slider)
body.append(carouselHolder);

sliderOptionOne.addEventListener("click", () => {
    sliderOptionOne.classList.add('active')
    sliderOptionTwo.classList.remove('active')
    sliderOptionThree.classList.remove('active')
    sliderOptionFour.classList.remove('active')
    backwardCarouselImage.src = imagesArray[3]
    mainCarouselImage.src = imagesArray[0]
    forwardCarouselImage.src = imagesArray[1]
})
sliderOptionTwo.addEventListener("click", () => {
    sliderOptionOne.classList.remove('active')
    sliderOptionTwo.classList.add('active')
    sliderOptionThree.classList.remove('active')
    sliderOptionFour.classList.remove('active')
    backwardCarouselImage.src = imagesArray[0]
    mainCarouselImage.src = imagesArray[1]
    forwardCarouselImage.src = imagesArray[2]
})

sliderOptionThree.addEventListener("click", () => {
    sliderOptionOne.classList.remove('active')
    sliderOptionTwo.classList.remove('active')
    sliderOptionThree.classList.add('active')
    sliderOptionFour.classList.remove('active')
    backwardCarouselImage.src = imagesArray[1]
    mainCarouselImage.src = imagesArray[2]
    forwardCarouselImage.src = imagesArray[3]
})

sliderOptionFour.addEventListener("click", () => {
    sliderOptionOne.classList.remove('active')
    sliderOptionTwo.classList.remove('active')
    sliderOptionThree.classList.remove('active')
    sliderOptionFour.classList.add('active')
    backwardCarouselImage.src = imagesArray[2]
    mainCarouselImage.src = imagesArray[3]
    forwardCarouselImage.src = imagesArray[0]
})