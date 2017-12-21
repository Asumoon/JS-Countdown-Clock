function CountDown(){
   var now = new Date();
    var eventDate = new Date(2018, 00, 1);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime ;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60 );
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;

    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;

// Down Part ko lagi hai Suru
     document.getElementById("day").textContent = d;
    document.getElementById("hour").textContent = h;
    document.getElementById("minute").textContent = m;
    document.getElementById("second").textContent = s;
// Down Part ko lagi hai End

tDigital = d + " d " + ": " + h + " hr " + ": " + m + " m " + ": " + s;
tDigital2 = d + " : " + h  + " : " + m  + " : " + s;
            d = d + " " + "Days";
            h = h + " " + "hr" ;
            m = m + " " + "min" ;
            s = s + " " + "sec" ;

// Down Part ko lagi hai Suru
    document.getElementById("d").textContent = d;
    document.getElementById("h").textContent = h;
    document.getElementById("m").textContent = m;
    document.getElementById("s").textContent = s;
// Down Part ko lagi hai End


// digital clock 
document.getElementById("timeDigital").textContent = tDigital;
document.getElementById("timeDigital2").textContent = tDigital2;
//

   setTimeout(CountDown, 1000);
}

CountDown();