// Add event listener to streetlights for toggling on and off
const streetlights = document.querySelectorAll('.streetlight');

streetlights.forEach(light => {
    light.addEventListener('click', function() {
        this.classList.toggle('on');
        this.style.transition = "box-shadow 0.3s ease, background-color 0.3s ease";  // Adds a smooth transition
    });
});
