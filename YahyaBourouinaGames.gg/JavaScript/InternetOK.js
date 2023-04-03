const internetStatus = document.getElementById("internetStatus");

window.addEventListener('load', function(event){
    detectInternet();
});
window.addEventListener('online', function(event){
    detectInternet();
});
window.addEventListener('offline', function(event){
    detectInternet();
});

function detectInternet() {
	if(navigator.onLine) {
		internetStatus.innerHTML = "<img style='width: 70px;' src='./Img/wifi.png'><br>You are back online&nbsp;&nbsp;<img class='reloadNet' src='./Img/reload.png'>";
		internetStatus.style.backgroundColor = "green";
		internetStatusDiv.style.backgroundColor = "green";
		MainInternet.style.backgroundColor = "green";
		setTimeout(function(){
			MainInternet.style.transform = "scale(0)";
		},5000);
	}else {
		internetStatus.innerHTML = "<img style='width: 70px;' src='./Img/notwifi.png'><br>No Internet Connection";
		internetStatus.style.backgroundColor = "red";
		internetStatusDiv.style.backgroundColor = "red";
		MainInternet.style.backgroundColor = "red";
		MainInternet.style.transform = "scale(1)";
	}
}

(function main(){
    for(var counter=0;counter<100;counter++){
		
		console.log(counter);
		var userImageLink = "https://img.freepik.com/free-vector/parallax-background-with-road-sea-sunset_107791-8646.jpg?size=626&ext=jpg&ga=GA1.2.20419862.1654956946&semt=ais";
		var time_start, end_time;
            
            // The size in bytes
            var downloadSize = 1172;
            var downloadImgSrc = new Image();
  
            downloadImgSrc.onload = function () {
                end_time = new Date().getTime();
                displaySpeed();
            };
            time_start = new Date().getTime();
            downloadImgSrc.src = userImageLink;            
  
            function displaySpeed() {
                var timeDuration = (end_time - time_start) / 1000;
                var loadedBits = downloadSize * 8;
                
				
                /* Converts a number into string
                   using toFixed(2) rounding to 2 */
					var bps = (loadedBits / timeDuration).toFixed(2);
					var speedInKbps = (bps / 1024).toFixed(2);
					var speedInMbps = (speedInKbps / 1024).toFixed(2);
					if (speedInKbps < 500) {
						document.getElementById("s").innerHTML = " " + speedInKbps + " kbps<br>Bad Internet<img width='24px' src='./Img/BadNet.png'>";
					}else if (speedInKbps > 500 && speedInKbps < 1000) {
						document.getElementById("s").innerHTML = " " + speedInKbps + " kbps<br>Good Internet<img width='24px' src='./Img/GoodNet.png'>";
					}else {
						document.getElementById("s").innerHTML = " " + speedInKbps + " kbps<br>Perfect Internet<img width='24px' src='./Img/PerfectNet.png'>";
					}
			}
    }
   console.log(100);
    while(counter){
       console.log(--counter);
    }
    setTimeout(main,1000);
})();