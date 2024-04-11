
// Get the hero and header elements
var heroElement = document.querySelector('.hero');
var headerElement = document.querySelector('.header');

// Set the initial position of the text off the bottom of the page
headerElement.style.position = 'relative';
headerElement.style.bottom = '-100px';

// Create an animation function to update the bottom and background-position properties over time
function animate() {
    var bottom = parseInt(headerElement.style.bottom);
    if (bottom < 0) {
        bottom += 1;
        headerElement.style.bottom = bottom + 'px';
        heroElement.style.backgroundPositionY = bottom * 0.5 + 'px';
        requestAnimationFrame(animate);
    }
}

// Start the animation
animate();

// Select the footer element
const footer = document.querySelector('footer');

// Add an event listener to animate the footer on mouseover
footer.addEventListener('mouseover', () => {
    footer.style.transition = 'all 0.5s ease-in-out';
    footer.style.transform = 'scale(1.1)';
});

// Add an event listener to reset the animation on mouseout
footer.addEventListener('mouseout', () => {
    footer.style.transform = 'scale(1)';
});


