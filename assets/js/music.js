/*
 * made by igna#5057 / at 0:14 a.m. (20-07-2022)
 * don't blame me for the shit code, also i personally hate using JS on such a basic page, :p
 */

const songs = [
  "assets/songs/Bladee - Be Nice 2 Me.mp3",
  "assets/songs/Bladee - I Think....mp3",
  "assets/songs/Bladee - Trendy.mp3",
  "assets/songs/Bladee, Ecco2k - Obedient.mp3",
  "assets/songs/Bladee, Mechatok, Charli XCX - Drama.mp3",
  "assets/songs/quinn - fake emotions.mp3",
  "assets/songs/quinn - friend of the enemy.mp3",
  "assets/songs/quinn, blackwinterwells - ok im cool.mp3",
];

var audio = new Audio(songs[Math.floor(Math.random() * songs.length)]);
window.onclick = function() {
  audio.play();
}
