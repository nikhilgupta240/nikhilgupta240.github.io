window.onload = function(){
	init();
};

function init(){
	var canvas = document.getElementById("profilePic");
	var ctx = canvas.getContext("2d");
	var img = document.createElement("img");
	img.src = "image/nikhil_gupta.jpg";
	img.alt = "Nikhil Gupta";
	ctx.drawImage(img,10,10);
}