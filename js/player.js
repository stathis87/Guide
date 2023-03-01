//The player is a modified version taken from this page
//https://ide.geeksforgeeks.org/online-html-editor/T3gdWUn4aX

let track_name = document.querySelector(".track-name");

let playpause_btn = document.querySelector(".playpause-track");
// const next_btn = document.querySelector(".next-track");
// const prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  {
    name: "test song",
    path: "assets/tracks/Stathis_Doganis_camerata.mp3"
  },
];

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();

  // Load a new track
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  
  //now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  // Set an interval of 1000 milliseconds for updating the seek slider
  updateTimer = setInterval(seekUpdate, 1000);

  // Move to the next track if the current one finishes playing
  curr_track.addEventListener("ended", nextTrack);

}



// Reset Values
function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;

  // Replace icon with the pause icon
  playpause_btn.innerHTML = '<img src="assets/icons/pause-yellow.png" alt="play button" class="toggle-btn">';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;

  // Replace icon with the play icon
  playpause_btn.innerHTML = '<img src="assets/icons/play-yellow.png" alt="play button" class="toggle-btn">';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  // Check if the current track duration is a legible number
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    // Adding a zero to the single digit time values
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

// Load the first track in the tracklist
loadTrack(track_index);




//DRAFT to delete before release



// const audioPlayer = document.querySelector('.audio-player')
// const video = audioPlayer.querySelector('.audio')
// const toggle = audioPlayer.querySelector('.toggle');

// const progress = audioPlayer.querySelector('.audio-progress')
// const progressBar = audioPlayer.querySelector('.audio-progress-fill')
// const playBtn = document.getElementById('plp')



// /* Functions */
// function togglePlay() {
//   const method = audio.paused ? 'play' : 'pause';
//   audio[method]();
// }

// function updateButton() {
//   const icon = this.paused ? '' : '';
//   //console.log(icon);
//   toggle.textContent = icon;

// }


// function handleProgress() {
//   const percent = (audio.currentTime / audio.duration) * 100;
//   progressBar.style.width = `${percent}%`;
// }

// function progressSlide(e) {
//   const scrubTime = (e.offsetX / progress.offsetWidth) * audio.duration;
//   audio.currentTime = scrubTime;
//   console.log(e);
// }

// // todo create a function that changes/removes the play-btn class

// function playButton(e) {
//   const playImg = this.paused ? 'play' : 'pause';
//   playBtn.style.opacity = 1;
//   console.log(e)
// }

// function pauseButton(e) {
//   const playImg = this.play ? 'play' : 'pause';
//   playBtn.style.opacity = 0;
//   console.log(e)
// }

// /* Event listeners */
// audio.addEventListener('click', togglePlay);
// // video.addEventListener('play', updateButton);
// // video.addEventListener('pause', updateButton);
// audio.addEventListener('timeupdate', handleProgress);

// toggle.addEventListener('click', togglePlay);

// audio.addEventListener('pause', playButton);
// audio.addEventListener('play', pauseButton);


// let mousedown = false;
// progress.addEventListener('click', progressSlide);
// progress.addEventListener('mousemove', (e) => mousedown && progressSlide(e));
// progress.addEventListener('mousedown', () => mousedown = true);
// progress.addEventListener('mouseup', () => mousedown = false);





//second script