// ====== CAREER PAGE JS ======

// Navbar hide on scroll down, show on scroll up
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 100) {
    // Scroll down → hide navbar
    navbar.style.top = '-90px';
  } else {
    // Scroll up → show navbar
    navbar.style.top = '0';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Avoid negative scroll
});

// ====== BACK TO TOP BUTTON ======
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="bi bi-arrow-up-short"></i>';
backToTopBtn.classList.add('back-to-top');
document.body.appendChild(backToTopBtn);

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

// Smooth scroll to top
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ====== ADD NAVBAR SHADOW ON SCROLL ======
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('navbar-shadow');
  } else {
    navbar.classList.remove('navbar-shadow');
  }
});
