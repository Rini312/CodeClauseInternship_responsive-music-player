const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const volumeSlider = document.getElementById('volume-slider');

playPauseBtn.addEventListener('click', () => {
  if (audioPlayer.paused || audioPlayer.ended) {
    audioPlayer.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = 'Play';
  }
});

volumeSlider.addEventListener('input', () => {
  audioPlayer.volume = volumeSlider.value;
});
