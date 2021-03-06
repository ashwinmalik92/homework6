var video;
var newRate;
var duration;
var newTime;
var dispVolume;

function getVid() {
	video = document.querySelector("#myVideo"); 
	video.setAttribute("poster", "images/thumb.jpg");
}

function playVid() { 
	video.play();
	document.querySelector("#volume").innerHTML = volumeSlider.value + "%";
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
	newRate = video.playbackRate * .8;
	if (newRate < 0.1) {
		newRate = 0.1073741824;
	}
	video.playbackRate = newRate;
	console.log("Speed is " + newRate);
}

function increaseSpeed() {
	video.playbackRate = video.playbackRate * 1.25;
	console.log("Speed is " + video.playbackRate);
} 

function skipAhead() {
	duration = video.duration;
	newTime = video.currentTime + 60;
	if (newTime > duration) {
		video.currentTime = 0;
		video.playbackRate = 1;
	}
	else {
		video.currentTime = newTime;
	}
	console.log("Current location is " + video.currentTime + " seconds");
} 

function mute() { 
  	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmuted");
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted");
	}
}

function changeVolume() {
	volumeSlider.value = 100;
	volumeSlider.oninput = function () {
		video.volume = this.value / 100;
		dispVolume = this.value + "%";
		document.querySelector("#volume").innerHTML = dispVolume;
		console.log("Volume is " + dispVolume);
	}
}
       
function gray() { 
	video.classList.add("grayscale");
	console.log("In grayscale");
}

function color() {
	video.classList.remove("grayscale");
	console.log("In color");
}