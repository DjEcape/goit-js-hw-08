import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('eventName', function(event) {
  localStorage.setItem("videoplayer-current-time", event.seconds)
});
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))

console.log(player.on)
// player.getCurrentTime().then(function(seconds) {
//     // seconds = the current playback position
// }).catch(function(error) {
//     // an error occurred
// });

// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });


// "videoplayer-current-time"