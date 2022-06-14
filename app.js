let sliders = document.querySelectorAll(".slider");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

let currentPosition = 0;

function activateSlider() {
  for (let index = 0; index < sliders.length; index++) {
    sliders[index].style.transform = `translateX(-${currentPosition}00%)`;
    console.log(index);
  }
  currentPosition++;

  if (currentPosition > sliders.length - 1) {
    currentPosition = 0;
  }
}

setInterval(() => {
  activateSlider();
}, 2000);

left.addEventListener("click", () => {
    currentPosition = currentPosition -1
    if (currentPosition < 1) {
        currentPosition = sliders.length
    }
    for (let index = 0; index < sliders.length; index++) {
      sliders[index].style.transform = `translateX(-${currentPosition -1}00%)`;
    }
})

right.addEventListener("click", () => {
    currentPosition = currentPosition +1
    if (currentPosition < 1) {
        currentPosition = sliders.length -1

        currentPosition = 0
    }
    for (let index = 0; index < sliders.length; index++) {
      sliders[index].style.transform = `translateX(-${currentPosition}00%)`;
    }
})