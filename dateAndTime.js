var date = new Date(1999, 7, 6, 19, 20, 53);
date.setMinutes(25);
text = "Year - " + date.getFullYear();
text += "\nMonth - " + date.getMonth();
text += "\nDay - " + date.getDay();
text += "\nHours - " + date.getHours();
text += "\nMinutes - " + date.getMinutes();
text += "\nSeconds - " + date.getSeconds();
// alert(text);

var date = new Date();
text = "Year - " + date.getFullYear();
text += "\nMonth - " + date.getMonth();
text += "\nDay - " + date.getDay();
text += "\nHours - " + date.getHours();
text += "\nMinutes - " + date.getMinutes();
text += "\nSeconds - " + date.getSeconds();
alert(text);