document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector("#menu-icon"); // ✅ FIXED
    const navbar = document.querySelector(".navbar");
  
    if (!menuIcon || !navbar) return;
  
    menuIcon.addEventListener("click", () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    });
  
    // Optional but recommended: close menu after clicking a link
    document.querySelectorAll(".navbar a").forEach((link) => {
      link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuIcon.classList.remove("bx-x");
      });
    });
  });
