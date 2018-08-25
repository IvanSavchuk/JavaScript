var arr = new Array(2, 3, 56, 12, 23, 590, 123, 7);
text = "Длина массива - " + arr.length;
text += "\nМассива состоит из - " + arr.join(", ");
text += "\nСортированный массив - " + (arr.sort()).join(", ");
alert(text);