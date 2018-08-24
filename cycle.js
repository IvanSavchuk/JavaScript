for(var i = 0; i < 10; i++) {
    if(i %3 == 0 && i != 0) continue;
    if(i == 8) break; 
    document.write(i + "<br/>");
}

var x = 0;
while (x < 10) {
    document.write(x + "<br/>")
    x += 2;
}

var y = 1000;
do {
    document.write("The cycle worked!")
} while (y < 100);