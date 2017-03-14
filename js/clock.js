var apiKey = require('./../.env').apiKey;

function Clock() {
}

Clock.prototype.getLocalTime = function() {
  // $.get('https://www.amdoren.com/api/timezone.php?api_key=Y5hxsN3nXGyQThdNn7zFXwxysE3UmL&loc=New+York')
  $.get('http://api.timezonedb.com/v2/get-time-zone?key=' + apiKey + '&format=json&by=zone&zone=America/Los_Angeles')
  .then(function(response) {
    $("#current-time").text(response.formatted);
  }).fail(function(error) {
    $("#current-time").text(error.responseJSON.message);
  });
};

exports.clockModule = Clock;
