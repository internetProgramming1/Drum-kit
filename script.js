document.addEventListener("DOMContentLoaded", function() {
    // Select all areas within the image map
    const areas = document.querySelectorAll('area');
    
    // Add event listeners to each area
    areas.forEach(area => {
        area.addEventListener("click", function(event) {
            // Prevent default behavior
            event.preventDefault();

            // Get the sound id from the alt attribute of the clicked area
            const soundId = area.getAttribute('alt');

            // Play the corresponding sound
            playSound(soundId);
        });
    });
});

// Function to play sound based on the soundId passed
function playSound(soundId) {
    const sound = new Audio(`sounds/${soundId}.wav`); // Ensure correct path to sounds folder
    sound.play();
}
