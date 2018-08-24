var global = 12;
var i = 10;

function test() {
    global++;
    var i = 5;
}

test();
document.write("Global - " + global + ", variable - " + i);