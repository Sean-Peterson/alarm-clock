var Clock = require('./../js/clock.js').clockModule;

var displayTime = function(Time) {
  $("#current-time").text(Time);
  $('#time-we-want').val(Time);
};
var alarmTrigger = function(){
  $('.alarm').empty();
  $('.alarm').append('<h1> IT WENT OFF. DO THE THING <br><img src="https://media.tenor.co/images/13891bcd44f7fea4b3fcfe7d4dd05a00/raw" alt="Cute Goat"><br><img src="https://media.tenor.co/images/089ebe090b9e6f45e82870a36708483e/raw" alt="Cute Goat"><br><img src="https://media.tenor.co/images/b542e2789316f637077d14c3b7af3b6d/raw" alt="Goat jump"><br><audio controls autoplay><source src="./01-the-screaming-sheep.mp3" type="audio/mp3"></audio></h1>');
  $('.snooze').show();

};

$(document).ready(function(){
  var clock = new Clock();
  clock.getLocalTime(displayTime);
  $('#alarm').submit(function(event){
    event.preventDefault();
    var alarmTime = $('#alarm-time').val();
    console.log(alarmTime);
    clock.alarm(alarmTime, alarmTrigger);
  });
  $('#snooze-button').click(function(){
    var snoozeTime = moment().add(1, 'minutes').format('HH:mm');
    console.log(snoozeTime);
    clock.alarm(snoozeTime, alarmTrigger);
  });

});
