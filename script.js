// Declare variables using DOM
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var amPm = document.getElementById('amPm');

setInterval(function() {

    var date = new Date();

var currentHours = date.getHours();
if(currentHours > 11){
currentHours = 'Am';

} if(currentHours !=12){
    currentHours -=12;
    currentHours = 'Pm'
}

     hours.innerText = date.getHours();
     minutes.innerText = date.getMinutes();
     seconds.innerText = date.getSeconds();
     amPm.innerText = currentHours;
} , 1000);
