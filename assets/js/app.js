// * NAVIGATION START
const menuBtn = document.getElementById("mobileMenuBtn");
const sidebar = document.getElementById("mobileSidebar");
const overlay = document.getElementById("overlay");
const closeSidebar = document.getElementById("closeSidebar");
const mobileLinks = document.querySelectorAll(".mobile-link");

function closeMenu() {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
}

menuBtn.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
});

closeSidebar.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// Close sidebar on mobile link click
mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
// * NAVIGATION END
