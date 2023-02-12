const slide = document.querySelectorAll(".slide");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

const autoScroll = true;

const intervalTime = 4000;

let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".current");

  current.classList.remove("current");

  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slide[0].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"), 200);
};

const prevSlide = () => {
  const current = document.querySelector(".current");

  current.classList.remove("current");

  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slide[slide.length - 1].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"), 200);
};

nextBtn.addEventListener("click", (e) => {
  nextSlide();

  if (autoScroll) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prevBtn.addEventListener("click", (e) => {
  prevSlide();

  if (autoScroll) {
    clearInterval(slideInterval);
    slideInterval = setInterval(prevSlide, intervalTime);
  }
});

if (autoScroll) {
  slideInterval = setInterval(nextSlide, intervalTime);
}
