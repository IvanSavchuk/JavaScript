var arr = new Array("Ivan", 19, 7.7, false);
for(var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br/>");
}

arr = new Array();
for(i = 0; i < 10; i++){
    arr[i] = i * 3;
    document.write(arr[i] + "<br/>"); 
}

var summ = 0;
for(i = 0; i < arr.length; i++){
    summ += arr[i];
}

document.write("Cумма равна - " + summ + "<br/>");
document.write("Среднее арифметическое значение - " + (summ / arr.length));