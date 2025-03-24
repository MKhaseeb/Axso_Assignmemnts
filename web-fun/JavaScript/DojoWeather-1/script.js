function acceptCookies() {
    document.getElementById("cookieBox").style.display = "none";
    console.log(acceptCookies)
}

function hide() {
    alert("Loading waether report...")
}

function temps() {
var reds = document.querySelectorAll(".low")
    for(i = 0 ; i<reds.length ; i++ ){

        reds[i].innerText=reds[i].innerText*2
        // console.log(reds);
    }
}
