// === PANDA ADS PAGE JAVASCRIPT ===

// === 1. HIDE NAVBAR ON SCROLL DOWN / SHOW ON SCROLL UP ===
let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
  }

  prevScrollPos = currentScrollPos;
});

// === 2. GO TO TOP BUTTON ===
const goTopBtn = document.createElement("button");
goTopBtn.innerHTML = "↑";
goTopBtn.id = "goTopBtn";
document.body.appendChild(goTopBtn);

const btnStyle = document.createElement("style");
btnStyle.innerHTML = `
  #goTopBtn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #FF2B85;
    color: white;
    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
  }
  #goTopBtn.show {
    opacity: 1;
    visibility: visible;
  }
  #goTopBtn:hover {
    background-color: #e02674;
  }
`;
document.head.appendChild(btnStyle);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    goTopBtn.classList.add("show");
  } else {
    goTopBtn.classList.remove("show");
  }
});

goTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === 3. FIX MOBILE NAVBAR TOGGLER ===
document.querySelectorAll(".navbar .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
    }
  });
});
