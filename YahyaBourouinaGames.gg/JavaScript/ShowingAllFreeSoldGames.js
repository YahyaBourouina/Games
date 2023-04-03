function showFreeGames() {
	var FreeGames = document.getElementsByClassName("FreeGame");
		for (var a = 0, leng = FreeGames.length; a < leng; a++) {
		FreeGames[a].style.display = "inline";
	}
	var SoldGames = document.getElementsByClassName("SoldGame");
		for (var i = 0, len = SoldGames.length; i < len; i++) {
		SoldGames[i].style.display = "none";
	}
	document.getElementById("settingsBox").style.transform = "scale(0)";
	document.getElementById("bgStngsGry").style.transform = "scale(0)";
	document.getElementById("PricingInfo").innerHTML = "Free Games ←<small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.</small>";
}
function showSoldGames() {
	var FreeGames = document.getElementsByClassName("FreeGame");
		for (var a = 0, leng = FreeGames.length; a < leng; a++) {
		FreeGames[a].style.display = "none";
	}
	var SoldGames = document.getElementsByClassName("SoldGame");
		for (var i = 0, len = SoldGames.length; i < len; i++) {
		SoldGames[i].style.display = "inline";
	}
	document.getElementById("settingsBox").style.transform = "scale(0)";
	document.getElementById("bgStngsGry").style.transform = "scale(0)";
	document.getElementById("PricingInfo").innerHTML = "Sold Games ←<small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.</small>";
}
function showAllGames() {
	var FreeGames = document.getElementsByClassName("FreeGame");
		for (var a = 0, leng = FreeGames.length; a < leng; a++) {
		FreeGames[a].style.display = "inline";
	}
	var SoldGames = document.getElementsByClassName("SoldGame");
		for (var i = 0, len = SoldGames.length; i < len; i++) {
		SoldGames[i].style.display = "inline";
	}
	document.getElementById("settingsBox").style.transform = "scale(0)";
	document.getElementById("bgStngsGry").style.transform = "scale(0)";
	document.getElementById("PricingInfo").innerHTML = "All Games ←<small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.</small>";
}