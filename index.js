const display1 = document.getElementById('hour');
const display2 = document.getElementById('minutes');
const display3 = document.getElementById('seconds');
const display4 = document.getElementById('midd');
const display5 = document.getElementById('greeting');



function updateTime() {
    const date = new Date();

    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());
    var midd;


    display1.innerHTML=`${hour}`;
    display2.innerHTML=`${minutes}`;
    display3.innerHTML=`${seconds}`;
    midd = (hour>= 12) ? "PM" : "AM";
    display4.innerHTML=`${midd}`;
    
    const greeting = document.getElementById("greeting");
    const welcomeTypes = ["Good Morning", "Good Afternoon", "Good Evening"];
    let welcomeText = "";
    
    if (hour < 12) welcomeText = welcomeTypes[0];
    else if (hour < 18) welcomeText = welcomeTypes[1];
    else welcomeText = welcomeTypes[2];
    
    greeting.innerHTML=`${welcomeText}`;
    console.log(greeting);
    
}
function formatTime(time) {
    if ( time < 10 ) {
        return '0' + time;
    }
    return time;
}

setInterval(updateTime, 1000);



function setImage(select){
   
    var image = document.getElementsByName("image-swap")[0];
    image.src = select.options[select.selectedIndex].value;

      

} 

function setTimer()
{
    let selectWakeTime = document.getElementById("setWakeTime");
	let optionWake = selectWakeTime.options[selectWakeTime.selectedIndex];
  
    let selectLunchTime = document.getElementById("setLunchTime");
	let optionLunch  = selectWakeTime.options[selectLunchTime.selectedIndex];
    
    let selectNapTime  = document.getElementById("setNapTime");
	let optionNap  = selectWakeTime.options[selectNapTime .selectedIndex];

    if (
		optionWake.value == "default" &&
		optionLunch.value == "default" &&
		optionNap.value == "default"
	) {
		alert("⚠ Please set the time ⏳ before getting started !! 🙇‍♀️");
	} else {
		document.getElementById("greet").style.display = "block";
	}
	
	if (optionWake.value != "default") {
		document.getElementById(
			"wakeupTime"
		).innerHTML = `Wake Up Time: ${optionWake.innerHTML}`;
	}
	if (optionLunch.value != "default") {
		document.getElementById(
			"lunchTime"
		).innerHTML = `Lunch Time: ${optionLunch.innerHTML}`;
	}
	if (optionNap.value != "default") {
		document.getElementById(
			"napTime"
		).innerHTML = `Nap Time: ${optionNap.innerHTML}`;
	}

}



	






// const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
// audio.loop = true;
// let alarmTime = null;
// let alarmTimeout = null;