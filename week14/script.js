// Create random falling shapes with slow fade-out
function createShape() {
    const shapeTypes = ['circle', 'square', 'triangle'];
    const randomShape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];

    const shape = document.createElement('div');
    shape.classList.add('shape', randomShape);

    // Randomize the horizontal position (left)
    const randomX = Math.random();
    shape.style.setProperty('--random-x', randomX);

    // Add the shape to the container
    document.querySelector('.stairway-container').appendChild(shape);

    // Animate shape falling
    shape.style.animation = 'fallDown 10s infinite ease-in';

    // Slowly fade out when clicked
    shape.addEventListener('click', () => {
        shape.style.transition = 'transform 1s, opacity 1s';
        shape.style.opacity = '0';
        shape.style.transform = 'scale(0)';
        setTimeout(() => shape.remove(), 1000); // Remove shape after shrinking
    });
}

// Create a new shape every 4 seconds to enhance the ambient feeling
setInterval(createShape, 4000);

// Event listener for the last step to open the modal
document.querySelector('.last-step').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'flex'; // Show modal
});

// Event listener for the 'Yes' button to navigate to the Parking Lot page
document.getElementById('confirmGo').addEventListener('click', function() {
    window.location.href = 'parking-lot.html'; // Navigate to Parking Lot page
});

// Event listener for the 'No' button to close the modal
document.getElementById('cancelGo').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none'; // Close modal
});
window.addEventListener('load', function() {
    const audio = document.getElementById('ambient-sound');
    
    // Play the sound on page load, or after a user clicks anywhere on the page
    document.body.addEventListener('click', function() {
        audio.play();
    });
});

// Toggle light on/off
function toggleLight() {
    const light = document.querySelector('.ceiling-light');
    const body = document.body;

    // Toggle the light on and off
    light.classList.toggle('light-on');

    // Change the background color when the light is on
    if (light.classList.contains('light-on')) {
        body.style.backgroundColor = '#f0f0f0'; // Simulate visibility (light on)
    } else {
        body.style.backgroundColor = '#101010'; // Darkness when light off
    }
}