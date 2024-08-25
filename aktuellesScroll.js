let scrollContainer = document.querySelector('.gallery');
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

const imageWidth = scrollContainer.clientWidth; // Width of one image
const images = scrollContainer.querySelectorAll('.gallery-item'); // All image divs
const numImages = images.length;
let currentIndex = 0;

// Function to update the z-index for the currently active image
function updateActiveImage(index) {
    images.forEach((img, i) => {
        if (i === index) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}

// Initialize the first image as active
updateActiveImage(currentIndex);

// Helper function to handle smooth scrolling
function scrollToImage(index) {
    const scrollAmount = index * imageWidth;
    scrollContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    updateActiveImage(index);
}

// Button event listeners
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % numImages;
    scrollToImage(currentIndex);
});

backBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + numImages) % numImages;
    scrollToImage(currentIndex);
});

// Handle mouse wheel scrolling
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    if (evt.deltaY > 0) {
        nextBtn.click();
    } else {
        backBtn.click();
    }
});

// Handle keyboard arrow key navigation
document.addEventListener("keydown", (evt) => {
    if (evt.key === "ArrowRight") {
        nextBtn.click();
    } else if (evt.key === "ArrowLeft") {
        backBtn.click();
    }
});