var Clock = require('./../js/clock.js').clockModule;

var displayTime = function(Time) {
  $("#current-time").text(Time);
  // setTimeout(function(){$('#time-we-want').val(Time)}, 20);

  $('#time-we-want').val(Time);
  // console.log(Time);
};
var something = function(alarmResponse){

  $('.alarm').text(alarmResponse);
};

$(document).ready(function(){
  var clock = new Clock();
  var currentTime = clock.getLocalTime(displayTime);
  // var alarmTime;
  $('#alarm').submit(function(event){
    var alarmTime = 0;
    event.preventDefault();
    var alarmTime = $('#alarm-time').val();
    console.log(alarmTime);
    var checkTime = clock.alarm(alarmTime, something);
  });
});
