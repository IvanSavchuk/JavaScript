var x = 5;
var y;
var result;

y = 5;
result = x + y;
// result = x - y;
// result = x * y;
// result = x / y;
document.write(result);

// result += x;
// result -= x;
result *= x;
// result /= x;
document.write("<br/>" + result);

result++;
// result--;

document.write("<br/>" + result);
document.write("<br/>");
document.write(x + " + " + y + " = " + (x + y));
document.write("<br/>");

var str_1 = "12";
var str_2 = Number("24");
// document.write(str_1 + str_2);
document.write(Number(str_1) + (str_2));
document.write("<br/>");

var bool;
var z = 6;
var d = 7;

bool = z < d;
// bool = z > d;
// bool = z <= d;
// bool = z >= d;
// bool = z == d;
document.write(bool);
document.write("<br/>");

document.write(15 + " % " + 7 + " = " + (15%7));
