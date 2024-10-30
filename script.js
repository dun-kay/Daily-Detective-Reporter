// Initialize game state
let guesses = 0;
let hintsUsed = 0;
let maxHints = 3;

// Load saved data from localStorage if available
window.onload = () => {
    guesses = localStorage.getItem("guesses") || 0;
    hintsUsed = localStorage.getItem("hintsUsed") || 0;
    document.getElementById("guess-counter").innerText = `Guess: ${guesses}`;
};

// Handle hint button clicks
document.querySelectorAll(".hint-button").forEach((button, index) => {
    button.onclick = () => {
        if (hintsUsed < maxHints) {
            hintsUsed++;
            localStorage.setItem("hintsUsed", hintsUsed);
            alert(`Hint ${index + 1}: This is a hint related to ${button.innerText.split('(')[1].split(')')[0]}`);
        } else {
            alert("You've used all available hints.");
        }
    };
});
