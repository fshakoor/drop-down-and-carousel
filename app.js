let body = document.querySelector("body");

let dropDownHeader = document.createElement('h1');
dropDownHeader.innerHTML = 'Drop Down Menu'
body.appendChild(dropDownHeader)

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
dropDownMainTriangle.innerHTML = "⌵";
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
    isDropDownOn = true;
  } else {
    dropDownOptions.classList.add("hidden");
    isDropDownOn = false;
  }
}
