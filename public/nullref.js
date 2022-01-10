function redirect(url) {
    var timeOut = 5;
    var timer = setInterval(() => {
        if( --timeOut <= -1 ) {
            clearInterval(timer);
            window.location.replace(url);
        } else {
            if( timeOut > 0 )
                document.getElementById("timer").innerHTML = timeOut;
            else
                document.getElementById("redirectMessage").innerHTML = "Redirecting...";
        }
    }, 1000);
}

function generate() {
    const validAbsURI = /^(?:(?:(?:https?):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

    let value = document.getElementById("urlToGenerate").value;
    let link  = document.getElementById("generatedUrl");

    if( value !== "" && value.match(validAbsURI) ) {
        link.className = "";
        link.innerHTML = "https://nullref.us/?" + value;
        link.href = "https://nullref.us/?" + value;
    } else {
        link.className = "hidden";
    }
}