console.log("Script is running");

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
