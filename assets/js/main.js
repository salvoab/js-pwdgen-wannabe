var name = prompt("What's your name?");
var surname = prompt("What's your surname?");
var colour = prompt("What's your favourite colour?");
var unsafePassword = name + surname + colour;

document.getElementById("pwd1").innerHTML = unsafePassword + "19";
document.getElementById("pwd2").innerHTML = unsafePassword + "20";