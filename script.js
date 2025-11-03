let currentSlideIndex = 0;
let interval;

function showSlide(index) {
  //get access
  const slides = document.getElementsByClassName("slide");
  console.log(slides);

  const dots = document.getElementsByClassName("dot");

  //a condition to reset the first slide when im cicking next button on last slide
  if (index >= slides.length) {
    currentSlideIndex = 0;
  }
  //a condition to reset the last slide when im cicking previous button on last slide
  if (index < 0) {
    currentSlideIndex = slides.length - 1;
  }

  //looping through the slides to hide the unwanted slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //lopping througth the dots to remove class from the dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("dot-active", "");
  }

  //to show 1 slide with current index bt replacing the display property
  slides[currentSlideIndex].style.display = "block";

  // console.log(dots[currentSlideIndex].className);

  //to add the class to active dots, enabling to add specific style to active dot.
  dots[currentSlideIndex].className += " dot-active"; //dot dot-active

  //assign the current image src to the image tag in the popup
  const popupImg = document.getElementById("popup-image");
  popupImg.src = slides[currentSlideIndex].src;
}

function changeSlide(n) {
  showSlide((currentSlideIndex += n));
}

function currentSlide(n) {
  showSlide((currentSlideIndex = n));
}

//this function is responsible for automatic slide change
function resetInterval() {
  clearInterval(interval);

  interval = setInterval(() => {
    changeSlide(1);
  }, 3000);
}

function openPopup() {
  clearInterval(interval); //stop the slide change
  const modal = document.getElementById("imagePopup");
  modal.style.display = "flex";
}

function closePopup() {
  const modal = document.getElementById("imagePopup");
  modal.style.display = "none";
  resetInterval();
}

showSlide(currentSlideIndex);
resetInterval();
