document.addEventListener("DOMContentLoaded", function() {
    var boutonSlide = document.querySelector(".bouton-slide");
    var modal = document.querySelector(".modal");
    var overlay = document.querySelector(".overlay");
    var boutonRetour = document.querySelector(".close");

    boutonSlide.addEventListener("click", function(e) {
        e.preventDefault();
        modal.style.display = "block"; // Affiche la modale
        overlay.style.display = "block"; // Affiche le fond
    });

    boutonRetour.addEventListener("click", function(e) {
        e.preventDefault();
        modal.style.display = "none"; // Cache la modale
        overlay.style.display = "none"; // Cache le fond
    });
});
