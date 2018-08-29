var string = "Небольшая строка";

var text = "Длина строки равна - " + string.length;
text += "\nСтрока в верхнем регистре - " + string.toUpperCase();
text += "\nСтрока в нижнем регистре - " + string.toLowerCase();
text += "\nОбрезанная строка - " + string.substring(0, 5);
text += "\n3-й символ это - " + string.charAt(3);
text += "\n'Стро' начинается с индекса - " + string.indexOf("стро");

alert(text);