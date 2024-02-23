document.addEventListener("DOMContentLoaded", function() {
    var lienAfficher = document.getElementById("lien-afficher");
    var lienReduire = document.getElementById("lien-reduire");
    var texteComplet = document.getElementById("texte-complet");
    var modal = document.querySelector(".modal-about");
    var overlay = document.querySelector(".overlay-about");
    var boutonRetour = document.querySelector(".close-about");

    lienAfficher.addEventListener("click", function(e) {
        e.preventDefault();
        document.getElementById("texte-reduit").style.display = "none";
        modal.style.display = "block";
        overlay.style.display = "block";
        document.body.style.overflow = "hidden";
    });

    boutonRetour.addEventListener("click", function(e) {
        e.preventDefault();
        document.getElementById("texte-reduit").style.display = "block";
        modal.style.display = "none";
        overlay.style.display = "none";
        document.body.style.overflow = "";
    });
});
