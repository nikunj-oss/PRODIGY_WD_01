document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const body = document.body;

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50 || body.classList.contains("menu-open")) {
            navbar.style.backgroundColor = "#555";
        } else {
            navbar.style.backgroundColor = "#333";
        }
    });

    // Toggle menu-open class on body when the hamburger button is clicked
    document.querySelector(".navbar-toggler").addEventListener("click", function () {
        body.classList.toggle("menu-open");
    });
});
