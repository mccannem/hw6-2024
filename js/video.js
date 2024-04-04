var video;
video = document.querySelector("#player1");

// #1
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
});

// #2
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

// #3
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// #4
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate = 0.9;
	console.log("Speed is " + video.playbackRate);
});

// #5
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate = 1.1;
	console.log("Speed is " + video.playbackRate);
});

// #6
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Slow down video");
	video.currentTime += 10;
	if (video.currentTime > video.duration) {
		video.currentTime = 0;
	}
	console.log("Speed is " + video.currentTime);
});

// #7
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === true) {
		video.muted = false;
		document.getElementById("myButton1").value="Mute";
	}
	else {
		video.muted = true;
		document.getElementById("myButton1").value="Unmute";
	}
});



