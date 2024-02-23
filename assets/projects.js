document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal');
    const modalContent = modal.querySelector('.modal-content');

    function toggleModal() {
        modalContent.classList.toggle('show'); // Ajoute ou supprime la classe 'show' pour contrôler l'affichage de la modal
    }

    modal.addEventListener('click', toggleModal);
});
document.addEventListener('DOMContentLoaded', function() {
    const h6Element = document.getElementById('clickable');

    h6Element.addEventListener('click', function() {
        h6Element.style.display = 'none'; // Masquer l'élément lorsque vous cliquez dessus
    });
});