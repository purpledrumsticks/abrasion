// code to control the play state of the video on the home page
var isPlaying = false;

var video = document.getElementById('video');

var playVideo = function playVideo (stateOfVideo) {
  stateOfVideo === false ? video.play() : video.pause();
}

video.onclick = function () {
  isPlaying === false ? isPlaying = true : isPlaying = false;
  playVideo(isPlaying);
}
