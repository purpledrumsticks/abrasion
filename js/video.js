// code to control the play state of the video on the home page
var isPlaying = false;

var video = document.getElementById('video');
var playButton = document.getElementById('play');
var videoOverlay = document.getElementById('videoOverlay');

var playVideo = function playVideo (stateOfVideo) {
  stateOfVideo === false ? video.play() : video.pause();
}

playButton.onclick = function () {
  videoOverlay.style = 'display: none';
  playVideo(isPlaying);
  isPlaying === false ? isPlaying = true : isPlaying = false;
}

video.onclick = function () {
  console.log(isPlaying);
  playVideo(isPlaying);
  isPlaying === false ? isPlaying = true : isPlaying = false;
}
