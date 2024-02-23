document.addEventListener("DOMContentLoaded", function() {
    var modal = document.querySelector(".modal");
    var overlay = document.querySelector(".overlay");
    var boutonSlide = document.querySelector(".bouton-slide");
    var gridItems = document.querySelectorAll(".grid-item");

    boutonSlide.addEventListener("click", function(e) {
        e.preventDefault();
        modal.style.display = "block"; // Affiche la modale
        overlay.style.display = "block"; // Affiche le fond

        // Ajoute la classe "visible" à chaque élément de la grille
        gridItems.forEach(function(item) {
            item.classList.add("visible");
        });
    });

    // Autre code pour la fermeture de la modale
});
