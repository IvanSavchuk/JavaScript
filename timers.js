// var id = setInterval("myFunct_1()", 1000);
// var counter = 0;

// function myFunct_1() {
//     counter++;
//     alert("Секунд прошло - " + counter);
//     if (counter == 3) {
//         clearInterval(id);
//     }
// }

var counter = 0;

function timer() {
    counter++;
    document.getElementById("count").innerHTML = counter;
    setTimeout("timer()", 1000);
}