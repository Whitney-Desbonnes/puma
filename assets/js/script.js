let video = document.getElementById('video');
let sectionVideo = document.getElementById('pumaVideo');
let sectionAdresse = document.getElementById('pumaAdresse');
let arrowLink = document.getElementById('link');
console.log(video);


video.addEventListener('ended', masquer, false);
arrowLink.addEventListener('click', jump);

function masquer () {
    sectionVideo.classList.add('hide');
    setTimeout(() => {
        sectionAdresse.classList.add('show');
    },1000);
}

function jump () {
    video.pause()
    masquer();
}
