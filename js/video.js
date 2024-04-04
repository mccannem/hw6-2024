var video;
video = document.querySelector("#player1");

// #1: Page load
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);

	// Show current volume
	var vol = video.volume;
	this.document.getElementById("volume").innerHTML = (vol * 100) + "%";
});

// #2: Play video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");

	// Show current volume
	var vol = video.volume;
	document.getElementById("volume").innerHTML = (vol * 100) + "%";

	video.play();
});

// #3: Pause video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// #4: Slow down
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
});

// #5: Speed up
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate *= 1.1;
	console.log("Speed is " + video.playbackRate);
});

// #6: Skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 10;
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	}
	console.log("Video current time is " + video.currentTime);
});

// #7: Mute button
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		document.getElementById("volume").innerHTML = "0%";
	}
	else {
		video.muted = false;
		var vol = video.volume;
		document.getElementById("mute").innerHTML = "Mute";
		document.getElementById("volume").innerHTML = (vol * 100) + "%";
	}
});

// #8: Volume slider
document.querySelector("#slider").addEventListener("change", function() {
	var sliderVal = document.getElementById("slider").value;
	video.volume = (sliderVal / 100);
	var vol = video.volume;
	document.getElementById("volume").innerHTML = (vol * 100) + "%";
});

// #9: Old School styling
document.querySelector("#vintage").addEventListener("click", function() {
	// Add class
	document.getElementById("player1").classList.add("oldSchool")
});

// #10 Remove styling
document.querySelector("#orig").addEventListener("click", function() {
	// Add class
	document.getElementById("player1").classList.remove("oldSchool")
});


