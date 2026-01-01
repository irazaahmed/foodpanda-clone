// === Move to Top Button ===
const moveToTopBtn = document.getElementById('moveToTop');

window.addEventListener('scroll', () => {
  // Show button after scrolling down 300px
  if (window.scrollY > 300) {
    moveToTopBtn.classList.add('show');
  } else {
    moveToTopBtn.classList.remove('show');
  }
});

// Smooth scroll to top when clicked
moveToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// === Navbar Hide on Scroll Down / Show on Scroll Up ===
const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  // scroll down
  if (window.scrollY > lastScrollY && window.scrollY > 150) {
    navbar.classList.add('nav-hidden');
  } 
  // scroll up
  else if (window.scrollY < lastScrollY - 10) {
    navbar.classList.remove('nav-hidden');
  }
  lastScrollY = window.scrollY;
});

