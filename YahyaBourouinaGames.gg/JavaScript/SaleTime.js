// Set the date we're counting down to
var countDownDate = new Date("Septembre 3, 2022 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="SaleTime"
  document.getElementById("SaleTime").innerHTML = "&nbsp;&nbsp;&nbsp;This game is now on sale !!<br>&nbsp;&nbsp;&nbsp;Soo you must go now and buy it !!<br>&nbsp;&nbsp;&nbsp;Before EXPIREDING...<br>&nbsp;&nbsp;&nbsp;Sale time is :" + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("SaleTime").innerHTML = "EXPIRED";
  }
}, 1000);