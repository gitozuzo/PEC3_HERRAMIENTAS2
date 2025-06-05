document.addEventListener("DOMContentLoaded", () => {
  // Activar enlace actual
  const links = document.querySelectorAll(".nav__link, .nav-mobile-link");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("text-primary", "font-semibold");
    }
  });

  // Toggle del menú móvil
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");
  const openBtn = document.getElementById("menuToggle");
  const closeBtn = document.getElementById("menuClose");

  const openMenu = () => {
    menu.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
  };

  const closeMenu = () => {
    menu.classList.add("translate-x-full");
    overlay.classList.add("hidden");
  };

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
});
