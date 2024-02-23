document.addEventListener("DOMContentLoaded", function() {
    var section = document.querySelector(".about-me");
    var section = document.querySelector(".my-work");
    var section = document.querySelector(".follow-me");

    section.addEventListener("mouseover", function() {
        section.style.opacity = "0.7"; // Réduit l'opacité au survol
    });

    section.addEventListener("mouseout", function() {
        section.style.opacity = "1"; // Restaure l'opacité normale lorsque la souris quitte la section
    });
});