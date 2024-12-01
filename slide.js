const images = ["slide/baner.png",
                "slide/diskon.png",
                "slide/katakata.png"];
let currentIndex = 0;

function nextSlide() {
    const sliderImage = document.getElementById("slider-image");
    do {
        currentIndex++; 
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        sliderImage.src = images[currentIndex];
    } while (false);
}

function prevSlide() {
    const sliderImage = document.getElementById("slider-image");
    do {
        currentIndex--; 
        if (currentIndex < 0) {
            currentIndex = images.length - 1; 
        }
        sliderImage.src = images[currentIndex];
    } while (false);
}

setInterval(nextSlide, 3000);
