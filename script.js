document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobile-menu';
    
    // Create mobile menu links
    const links = ['Home', 'About', 'Services', 'Contact'].map(text => 
        `<a href="#${text.toLowerCase()}" class="block py-2">${text}</a>`
    ).join('');
    
    mobileMenu.innerHTML = links;
    document.querySelector('nav').appendChild(mobileMenu);

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });
});
