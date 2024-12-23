// Define the sounds
const sounds = {
    hihat: new Audio('./sounds/hihat.wav'), // Shared by Drum1 and Drum2
    crash: new Audio('./sounds/crash.wav'), // Shared by Drum3 and Drum4
    snare: new Audio('./sounds/snare.wav'), // Specific for Drum5
    floorTom: new Audio('./sounds/floorTom.wav'), // Shared by Drum6 and Drum7
    ride: new Audio('./sounds/ride.wav') // Specific for top-right cymbal
};

// Map area titles to sound keys
const areaSoundMapping = {
    Drum1: 'hihat',
    Drum2: 'hihat',
    Drum3: 'crash',
    Drum4: 'crash',
    Drum5: 'snare',
    Drum6: 'floorTom',
    Drum7: 'floorTom'
};

// Add event listeners to the map areas
document.querySelectorAll('area').forEach((area) => {
    area.addEventListener('click', (event) => {
        event.preventDefault();
        const soundKey = areaSoundMapping[area.title];

        if (soundKey && sounds[soundKey]) {
            sounds[soundKey].currentTime = 0; // Reset the sound if it's already playing
            sounds[soundKey].play();
        }
    });
});

  