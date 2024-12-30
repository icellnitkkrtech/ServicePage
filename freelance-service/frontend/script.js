function toggleMenu() {
    const menu = document.querySelector('.navbar .menu');
    menu.classList.toggle('active');
}

// Close the menu when clicking outside
document.addEventListener('click', (event) => {
    const menu = document.querySelector('.navbar .menu');
    const menuToggle = document.querySelector('.navbar .menu-toggle');
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('active');
    }
});
