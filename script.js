// Logic for Sticky Navbar
const navbar = document.getElementById("navbar");
const stickyPoint = navbar.offsetTop;

window.onscroll = function() {
    if (window.pageYOffset > stickyPoint) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

// Logic for Mobile Menu Toggle
function toggleMenu() {
    const links = document.getElementById("navLinks");
    // This adds/removes the CSS class .active to show/hide the menu
    if (links.classList.contains("active")) {
        links.classList.remove("active");
    } else {
        links.classList.add("active");
    }
}

// Logic to Close Menu when a link is clicked
function closeMenu() {
    const links = document.getElementById("navLinks");
    links.classList.remove("active");
}