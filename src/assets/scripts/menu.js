document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const close = document.getElementById("closeMenu");
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");

  const closeMenu = () => {
    menu.classList.add("translate-x-full");
    overlay.classList.add("hidden");
  };

  if (toggle && close && menu && overlay) {
    toggle.addEventListener("click", () => {
      menu.classList.remove("translate-x-full");
      overlay.classList.remove("hidden");
    });

    close.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
  }
});
