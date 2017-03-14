var Clock = require('./../js/clock.js').clockModule;

var displayTime = function(Time) {
  $("#current-time").text(Time);
  // setTimeout(function(){$('#time-we-want').val(Time)}, 20);

  $('#time-we-want').val(Time);
  // console.log(Time);
};

$(document).ready(function(){
  var clock = new Clock();
  var currentTime = clock.getLocalTime(displayTime);
  // var now = moment();
  // var time = clock.getExactTime();
  // console.log(time);
  $('#alarm').submit(function(event){
    event.preventDefault();
    var alarmTime = $('#alarm-time').val();
    var varr = '';
    setTimeout(function(){
    var varr = $('#time-we-want').val()}, 90);
    // console.log(alarmTime);
  });
});
