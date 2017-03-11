function updateTime() {
  var time = new Date();
  var hr = time.getHours();
  var mins = time.getMinutes();
  var ampm = 'am';

  if (hr > 12) {
    hr = hr - 12;
    ampm = 'pm';
  }

  if (mins < 10){
    mins = `0${mins}`;
  }

  var formattedTime = `${hr}:${mins} ${ampm}`;
  document.querySelector('#thing').innerHTML = formattedTime;
}
window.setInterval(updateTime, 100);

//TODO
// function timeTilStandup() {
//   var time = new Date();
//
// }

//schedule meeting
var scheduler = require('node-schedule');
const player = require('play-sound')(opts = {});
var song;

const meeting = scheduler.scheduleJob({dayOfWeek: [1, 2, 3, 4, 5], hour: 9, minute: 15, recurs: true}, function() {
  console.log('standup');
  function playThing() {
    song = player.play('./piano.mp3', { timeout: 10000 }, (err) => {
      if (err) console.log(`Could not play sound: ${err}`);
    });
  }
  playThing();
});

// function playThing() {
//   song = player.play('./piano.mp3', { timeout: 10000 }, (err) => {
//     if (err) console.log(`Could not play sound: ${err}`);
//   });
// }

function stopThing() {
  console.log('killing song');
  if (!song || song.killed) return;
  song.kill();
}

// document.getElementById('play').addEventListener('click', playThing);
document.getElementById('stop').addEventListener('click', stopThing);
