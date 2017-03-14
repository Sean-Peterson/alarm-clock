var Clock = require('./../js/clock.js').clockModule;

$(document).ready(function(){
  var clock = new Clock;
  var now = moment();
  $("#current-time").text(clock.getLocalTime());
});
