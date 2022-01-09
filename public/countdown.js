function redirect(url) {
    var timeOut = 2;
    var timer = setInterval(() => {
        if( --timeOut == -1 ) {
            clearInterval(timer);
            
            //window.location.replace(url);
        } else {
            if( timeOut > 0 )
                document.getElementById("timer").innerHTML = timeOut;
            else
                document.getElementById("redirectMessage").innerHTML = "Redirecting...";
        }
    }, 1000);
}