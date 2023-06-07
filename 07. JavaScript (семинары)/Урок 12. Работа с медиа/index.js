const videoEL = document.querySelector('.video');
const playBtnEl = document.querySelector('.fa-play');
const pauseBtnEl = document.querySelector('.fa-pause');
const volumeEL = document.querySelector('.volume');
const currentTimeEL = document.querySelector('.current__time');
const timingEL = document.querySelector('.timing');
const volumeLevelEl = document.querySelector('.volume-level');


playBtnEl.addEventListener('click', () => {
    videoEL.play();
});

pauseBtnEl.addEventListener('click', () => {
    videoEL.pause();
});

videoEL.addEventListener('timeupdate', () => {
    const minutes = Math.floor(videoEL.currentTime / 60)
    const seconds = Math.floor(videoEL.currentTime % 60)
    
    currentTimeEL.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    timingEL.value = videoEL.currentTime / videoEL.duration * 100;
});

timingEL.addEventListener('input', () => {
    videoEL.currentTime = timingEL.value / 100 * videoEL.duration;
});


volumeEL.addEventListener('input', () => {
    // videoEL.volume = volumeEL.value
    const volume = volumeEL.value;
    videoEL.volume = volume;
    volumeLevelEl.innerText = Math.round(volume * 10)

})

