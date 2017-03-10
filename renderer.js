var scheduler = require('node-schedule');

function updateTime() {
  var time = new Date();
  var hr = time.getHours();
  var mins = time.getMinutes();
  var ampm = 'am';

  if (hr > 12) {
    hr = hr - 12;
    ampm = 'pm';
  }

  var formattedTime = `${hr}:${mins} ${ampm}`;
  document.querySelector('#thing').innerHTML = formattedTime;
}

window.setInterval(updateTime, 100);


var meeting = new scheduler.RecurrenceRule();
meeting.dayOfWeek = [new scheduler.Range(1, 5)];
meeting.hour = 9;
meeting.minute = 15;

console.log(meeting);
