/*
 * made by igna#5057 / at 0:14 a.m. (20-07-2022)
 * don't blame me for the shit code, also i personally hate using JS on such a basic page, :p
 */

const songs = [
  "assets/songs/102601.mp3",
  "assets/songs/2533.mp3",
  "assets/songs/Ojitos Lindos.mp3"
];

var audio = new Audio(songs[Math.floor(Math.random() * songs.length)]);
window.onclick = function() {
  audio.play();
}
