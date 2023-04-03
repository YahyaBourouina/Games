function showHomeNhideAboutNothers() {
	document.getElementById("home").style.transform = "scale(1)";
	document.getElementById("about").style.transform = "scale(0)";
	document.getElementById("games").style.transform = "scale(0)";
	document.getElementById("gm").title = "0";
}
function showHome() {
	document.getElementById("about").style.transform = "scale(0)";
	document.getElementById("games").style.transform = "scale(0)";
	setTimeout(function(){
		document.getElementById("home").style.transform = "scale(1)";
	},500);
}
function showAbout() {
	document.getElementById("home").style.transform = "scale(0)";
	document.getElementById("games").style.transform = "scale(0)";
	setTimeout(function(){
		document.getElementById("about").style.transform = "scale(1)";
	},500);
}
function showGames() {
	document.getElementById("home").style.transform = "scale(0)";
	document.getElementById("about").style.transform = "scale(0)";
	setTimeout(function(){
		document.getElementById("games").style.transform = "scale(1)";
	},500);
}