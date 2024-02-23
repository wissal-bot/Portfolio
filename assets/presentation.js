document.getElementById("toggleSvg").addEventListener("click", function() {
    var moiDiv = document.querySelector('.moi');
    var disponibiliteDiv = document.querySelector('.disponibilite');
    
    // Si la classe "moi" est présente, la retire et affiche la classe "disponibilite" de manière progressive
    if (moiDiv.classList.contains('moi')) {
        moiDiv.classList.remove('moi');
        disponibiliteDiv.classList.add('active');
    } 
    // Sinon, si la classe "disponibilite" est présente, la retire et affiche la classe "skills"
    else if (disponibiliteDiv.classList.contains('active')) {
        disponibiliteDiv.classList.remove('active');
        skillsDiv.style.display = 'block';
    }
});
