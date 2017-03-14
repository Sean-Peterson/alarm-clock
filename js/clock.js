var apiKey = require('./../.env').apiKey;

function Clock() {
}

Clock.prototype.getLocalTime = function(displayTime) {
  setInterval(function() {
    $.get('http://api.timezonedb.com/v2/get-time-zone?key=' + apiKey + '&format=json&by=zone&zone=America/Los_Angeles')
    .then(function(response) {
      displayTime(response.formatted);
    }).fail(function(error) {
      $("#current-time").text("Error");
    });

  }, 1000);
};

Clock.prototype.alarm = function(alarmTime, alarmTrigger) {
  var stop = 1;
  setInterval(function() {
    if ((alarmTime == moment().format('HH:mm')) && stop < 2){
      alarmTrigger();
      stop ++;
    } 
  }, 1000);
};

exports.clockModule = Clock;
