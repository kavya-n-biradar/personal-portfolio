// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", isOpen);
});

// Close the menu after a link is clicked (mobile)
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
    });
});