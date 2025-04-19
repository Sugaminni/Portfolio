// AOS animation setup
AOS.init({
    once: true,
    offset: 120,
    duration: 600,
  });
  
  // Hamburger menu toggle
  function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('show');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const nav = document.getElementById('nav-menu');
  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('show');
      });
    });
  });
  