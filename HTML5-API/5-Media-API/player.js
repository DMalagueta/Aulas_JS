import {videos} from './data.js';

document.addEventListener('DOMContentLoaded', init, false);

function init() {


    // VARIABLES
    let controlBtns = document.getElementById('controlBtns');
    let video       = document.querySelector('#player video');

    let currentVideo = 0;

    let meter = document.querySelector('meter');
    meter.value = 0.5;

    video.src =`../media/${videos[currentVideo].url}`;
    video.volume = 0.5;


    // EVENTS
    controlBtns.addEventListener('click', comandosVideos, false);


    // EVENT FUNCTIONS
    function comandosVideos(e) {
        let botaoClicado = e.target;

        if(botaoClicado.id === 'playBtn'){
            playVideo();
        }
        if(botaoClicado.id === 'pauseBtn'){
            pauseVideo();
        }

        if(botaoClicado.id === 'stopBtn'){
            stopVideo();
        }

        if(botaoClicado.id === 'muteBtn'){
            muteVideo();
        }
        
        if(botaoClicado.id === 'maisBtn'){
            changeVolume(0.1);
        }

        if(botaoClicado.id === 'menosBtn'){
            changeVolume(-0.1);
        }
    }


    // ACTIONS
    function playVideo() {
        video.play();
    }

    function pauseVideo(){
        video.pause();
    }

    function stopVideo(){
        video.load()
    }

    function muteVideo(){
        video.muted = !video.muded;
    }

    function changeVolume(valor){
        meter.value += valor;
        video.volume=meter.value;
        video.muted=false;
    }
}