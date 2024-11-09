const sliderImg = document.getElementById("slider-img")
const nextSlideButton = document.getElementById("next-slide-button")
const prevSlideButton = document.getElementById("prev-slide-button")

const slides = ["img/slide-img1.png", "img/slide-img2.png", "img/slide-img3.png", "img/slide-img4.png", "img/slide-img5.png", "img/slide-img6.png"]

let slidePosition = 0
sliderImg.src = slides[slidePosition]

function nextSlide() {
    if (slidePosition == slides.length - 1) {
        slidePosition = 0
    } else {
        slidePosition += 1
    }
    sliderImg.src = slides[slidePosition]
}

function prevSlide() {
    if (slidePosition == 0) {
        slidePosition = slides.length - 1
    } else {
        slidePosition -= 1
    }
    sliderImg.src = slides[slidePosition]
}

nextSlideButton.addEventListener("click", nextSlide)
prevSlideButton.addEventListener("click", prevSlide)



