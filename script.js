const slideshows = document.querySelectorAll(".lookbook-slideshow");

slideshows.forEach((slideshow) => {
    const images = slideshow.querySelectorAll("img");
    let currentIndex = 0;

    if (images.length < 2) return;

    setInterval(() => {
        images[currentIndex].classList.remove("active");

        currentIndex = (currentIndex + 1) % images.length;

        images[currentIndex].classList.add("active");
    }, 2800);
});
