function Gameloved(a) {
	a.src = "./Img/loved.png";
	a.title += "1";
}
function Gamedwnld(a) {
	a.src = "./Img/done.png";
}
function hideIt() {
	document.getElementById("attention").style.transform = "scale(0)";
}
function showSettingsBox() {
	setTimeout(function(){
		document.getElementById("settingsBox").style.transform = "scale(1)";
	},500);
	document.getElementById("bgStngsGry").style.transform = "scale(1)";
}
function closeSettingsBox() {
	document.getElementById("settingsBox").style.transform = "scale(0)";
	setTimeout(function(){
		document.getElementById("bgStngsGry").style.transform = "scale(0)";
	},500);
}
function CloseSaleGameBox() {
	document.getElementById("SaleGameBox").style.right = "-1000";
}