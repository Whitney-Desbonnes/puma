// déclaration des variables
let video = document.getElementById('video');
let sectionVideo = document.getElementById('pumaVideo');
let sectionAdresse = document.getElementById('pumaAdresse');
let arrow = document.getElementById('arrow');

// Fonction pour masquer la vidéo une fois la lecture terminer
function masquer () {
    sectionVideo.classList.add('hide'); // ajoute la classe "hide" à la section video pour la faire disparaitre

    setTimeout(() => {
        sectionAdresse.classList.add('show');
    },1000); // ajoute la classe "show" pour faire apparaitre la section adresse, après un délai de 1s

    setTimeout(() => {
        arrow.classList.add('none');
    },2000); // ajoute la classe "none" pour faire disparaitre la flèche, après un délai de 2s
}

// Au click sur la flèche met pause à la vidéo et lance la fonction masquer()
function jump () {
    video.pause(); //pause
    masquer(); // lance la fonction masquer()
}

video.addEventListener('ended', masquer); // écouteur de fin lecture video
arrow.addEventListener('click', jump); // écouteur du click sur la fleche