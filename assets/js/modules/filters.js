/// FILTERS ANIMATIONS

// Function to rotate the icon 45 degrees to the right and then to the left
function rotateIcon(event) {
    event.target.classList.add('rotate-right');
    setTimeout(() => {
    event.target.classList.remove('rotate-right');
    event.target.classList.add('rotate-left');
  }, 150); // Waiting time before turning left (in milliseconds)
}

// Restore the original rotation when the mouse leaves the icon
function resetRotation(event) {
    event.target.classList.remove('rotate-left');
}

function filterMenuItems(category) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        const origin = item.querySelector('p.origin').textContent; 
        // Show or hide the menu item based on the category
        if (category === 'all' || origin === category) {
            item.style.display = 'block';
            item.classList.add('filtered-itemé');
        } else {
            item.style.display = 'none';
            item.classList.remove('filterd-item');
        }
    });
}

export { resetRotation, rotateIcon, filterMenuItems };