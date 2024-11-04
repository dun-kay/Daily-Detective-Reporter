console.log("Script is running");

console.log("Script loaded successfully");

document.querySelectorAll('.clue-1-column, .clue-2-column, .clue-3-column, .clue-4-column, .clue-5-column').forEach(column => {
  column.addEventListener('click', function() {
    // Remove the 'active' class from all 'l' divs in all columns
    document.querySelectorAll('.div-block-2.blank').forEach(lDiv => {
      lDiv.classList.remove('active');
    });

    // Add the 'active' class to 'l' divs within the clicked column
    column.querySelectorAll('.div-block-2.blank').forEach(lDiv => {
      lDiv.classList.add('active');
    });
  });
});

// Select all input elements within .input-row
document.querySelectorAll('.input-row input').forEach(input => {
    // Add an input event listener
    input.addEventListener('input', (event) => {
        // Convert the input value to uppercase
        event.target.value = event.target.value.toUpperCase();
    });
});






// Select elements
const openPopupButton = document.getElementById('rules');
const popup = document.getElementById('popup');
const backToGameButton = document.getElementById('back-to-game'); // Button that closes the popup

// Show popup when the "Rules" link is clicked
openPopupButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    popup.style.display = 'flex';
});

// Close popup when the "Back to game" button is clicked
backToGameButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    popup.style.display = 'none';
});

// Close popup if user clicks outside the popup content
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
