// ----- Slides
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const indicatorsContainer = document.querySelector('.carousel-indicators');

function showSlide(index) {
    if (index < 0) {
        index = totalItems - 1;
    } else if (index >= totalItems) {
        index = 0;
    }

    const offset = -index * items[0].offsetWidth;
    document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
    currentIndex = index;

    updateIndicators();
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function updateIndicators() {
    indicatorsContainer.innerHTML = '';
    for (let i = 0; i < totalItems; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (i === currentIndex) {
            indicator.classList.add('active');
        }
        indicator.onclick = function () {
            showSlide(i);
        };
        indicatorsContainer.appendChild(indicator);
    }
}

updateIndicators();
setInterval(nextSlide, 8000);