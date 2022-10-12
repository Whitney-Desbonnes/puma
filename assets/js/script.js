let video = document.getElementById('video');
let sectionVideo = document.getElementById('pumaVideo');
let sectionAdresse = document.getElementById('pumaAdresse');
let arrow = document.getElementById('arrow');

// Fonction pour masquer la vidéo une fois la lecture terminer
function masquer () {
    sectionVideo.classList.add('hide'); // ajoute la class hide à la section video poru la faire disparaitre

    setTimeout(() => {
        sectionAdresse.classList.add('show');
    },1000); // fait apparaitre la section adresse en ajoutant la classe show, après 1s

    setTimeout(() => {
        arrow.classList.add('none');
    },2000); // fait disparaitre la fleche en ajoutant la classe none, après 2s
}

// Au click sur la flème met pause à la vidéo et lance la fonction masquer()
function jump () {
    video.pause(); //pause
    masquer(); // lance la fonction masquer()
}

video.addEventListener('ended', masquer, false); // ecouteur de fin lecture video
arrow.addEventListener('click', jump); // ecouteur du click sur la fleche