function changetext(){
    var btn = document.getElementById("login")
    if (btn.innerText == "Login"){
        btn.innerText = 'logout';
} else {
     btn.innerText = "Login"
}
}

// function changetext(){
//     document.getElementById("logout").innerHTML="login"
// }

function Alert(){
    alert("Ninja was liked")
}
function del(){
    document.getElementById("btn").style.display="none"
}