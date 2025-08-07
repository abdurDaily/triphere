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

/**PRELOADER */
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");
  if (preloader && mainContent) {
    preloader.style.opacity = "0";
    preloader.style.pointerEvents = "none";

    setTimeout(() => {
      preloader.remove();
      mainContent.style.display = "block"; // show content after preloader is removed
    }, 600); // match fade out duration
  }
});

/**PRELOADER END */



// Initialize Swiper
  const swiper = new Swiper(".featured-packages-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });

  // Modal functions
  function openPackageDetails() {
    document.getElementById("packageModal").classList.remove("hidden");
  }

  function closePackageDetails() {
    document.getElementById("packageModal").classList.add("hidden");
  }

  // Close modal on outside click
  window.addEventListener("click", function (e) {
    const modal = document.getElementById("packageModal");
    if (!modal.classList.contains("hidden") && !modal.firstElementChild.contains(e.target)) {
      closePackageDetails();
    }
  });



    const thumbsSwiper = new Swiper(".thumbs-swiper", {
    spaceBetween: 10,
    slidesPerView: "auto", // allows responsive scrolling thumbs
    freeMode: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
  });

  const mainSwiper = new Swiper(".main-swiper", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: thumbsSwiper,
    },
  });