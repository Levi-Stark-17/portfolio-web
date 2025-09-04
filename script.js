function toggleMenu() {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeIcon = document.getElementById("close-icon");

  if (hamburgerMenu.style.display === "flex") {
    hamburgerMenu.style.display = "none";
    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
  } else {
    hamburgerMenu.style.display = "flex";
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "block";
  }
}

// --- NEW CODE START ---
// Select all links within the hamburger menu
const menuLinks = document.querySelectorAll(".hamburger-menu a");

// Add a click event listener to each link
menuLinks.forEach(function (link) {
  link.addEventListener("click", toggleMenu);
});
// --- NEW CODE END ---

// Setup and start animation!
var typed = new Typed("#element", {
  strings: ["Developer"],
  typeSpeed: 50,
});
