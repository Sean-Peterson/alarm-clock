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

Clock.prototype.alarm = function(alarmTime, something) {
  setInterval(function() {
    console.log(moment().format('HH:mm'));
    console.log(alarmTime);
    if (alarmTime == moment().format('HH:mm')){
      something('IT WENT OFF. DO THE THING')
    };
  }, 1000);
};

exports.clockModule = Clock;
