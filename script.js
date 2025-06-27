const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");

// Toggle the navigation menu on hamburger click
hamburger.addEventListener("click", () => {
    const isActive = navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
    document.body.classList.toggle("menu-open", isActive);
    overlay.classList.toggle("active", isActive);
})

// Close the menu when any nav link is clicked (for mobile view)
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
}))

// Close the menu if the overlay is clicked
overlay.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.classList.remove("menu-open");
    overlay.classList.remove("active");
});