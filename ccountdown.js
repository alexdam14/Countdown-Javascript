 $(document).ready(start);
var futuredate = new Date('February 13, 2017 01:00:00');
var difference = {hours:"",minutes:"",seconds:""};

setInterval(refreshDate, 1000);

function start() {
    initializeKnobs();
	refreshDate();
}



function initializeKnobs(){
        $(".hours").knob();
        $(".mins").knob();
        $(".secs").knob();

}

 

function setHours(hour){
  $(".hours").val(hour).trigger('change');
  
}

function setMinutes(mins){
  $(".mins").val(mins).trigger('change');
}

function setSeconds(secs){
  $(".secs").val(secs).trigger('change');

}

function refreshDate(){
var datenow = new Date();
difference.hours = Math.floor(Math.abs(futuredate - datenow) / 36e5);
difference.minutes = Math.abs(difference.hours*60 - Math.floor(Math.abs(futuredate - datenow) / 60000));
difference.seconds = Math.floor(((futuredate - datenow) - (difference.hours*3600000 + difference.minutes*60000))/1000);
setHours(difference.hours);
setMinutes(difference.minutes);
setSeconds(difference.seconds);

}

