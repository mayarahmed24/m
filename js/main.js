// Change navbar styling on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#0a0a0a';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.4)';
    } else {
        navbar.style.backgroundColor = '#121212';
        navbar.style.boxShadow = 'none';
    }
});