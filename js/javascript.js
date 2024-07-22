const circles = document.querySelectorAll(".circle");
const progress = document.querySelector(".indicator");
const buttons = document.querySelectorAll("button");

let currentStep = 1;

// function that updates the current step and updates the DOM
const updateSteps = (e) => {
  // update current step based on the button clicked
  currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

  // loop through all circles and add/remove "active" class based on their index and current step
  circles.forEach((circle, index) => {
    circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
  });

  // updata progress bar width based on current step
  progress.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;

  // check if current step is last step or frist step and disable corresponding buttons
  if (currentStep === circles.length) {
    buttons[1].disabled = true;
  } else if (currentStep === 1) {
    buttons[0].disabled = true;
  } else {
    buttons.forEach((button, index) => {
      button.disabled = false;
    });
  }
};

// add click event listeners to all buttons

buttons.forEach((button, index) => {
  button.addEventListener("click", updateSteps);
});
