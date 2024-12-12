const items = document.querySelectorAll('.carousel-item');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let currentIndex = 0;
const totalItems = items.length;

// Function to update the carousel and the background
function updateCarousel() {
    items.forEach((item, index) => {
        const angle = (360 / totalItems) * (index - currentIndex);
        item.style.transform = `translate(-50%, -50%) rotateY(${angle}deg)`;
        item.classList.toggle('active', index === currentIndex);
    });

    // Change background image (without blur)
    const activeItem = items[currentIndex];
    const activeImage = activeItem.getAttribute('data-bg');
    const backgroundImage = `url(${activeImage})`;

    document.body.style.backgroundImage = backgroundImage;
}

// Function to move to the next item
function nextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

// Function to move to the previous item
function prevItem() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

// Event listeners for navigation
prev.addEventListener('click', prevItem);
next.addEventListener('click', nextItem);

updateCarousel(); // Initialize on page load
