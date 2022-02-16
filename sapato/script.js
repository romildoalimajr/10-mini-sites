const slides = document.querySelectorAll('.slide');
const carrossel = document.getElementById('carrossel');
const left = document.getElementById('left');
const right = document.getElementById('right');

const SLIDES_COUNT = slides.length;

let current_slide = 0;

left.addEventListener("click", () => {
    current_slide--;
    if (current_slide < 0) {
        current_slide = SLIDES_COUNT - 1;
    }
    updateCarrossel();
});

right.addEventListener("click", () => {
    current_slide++;
    if (current_slide > SLIDES_COUNT - 1) {
        current_slide = 0;
    }
    updateCarrossel();
});

function updateCarrossel() {
    carrossel.style.transform = `translateX(${-current_slide * slides[0].offsetWidth}px)`;

    document.body.style.background = `#${slides[current_slide].getAttribute("data-bg")}`;
    document.body.style.color = `#${slides[current_slide].getAttribute("data-bg")}`;
}