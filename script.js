let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    currentIndex = (currentIndex + step + totalSlides) % totalSlides;

    const newTransform = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransform}%)`;
}
