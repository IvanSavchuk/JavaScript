var text = "Число PI - " + Math.PI;
text += "\nЧисло E - " + Math.E;
text += "\nМодуль -7 - " + Math.abs(-7);
text += "\nСинус 0.3 - " + Math.sin(0.3);
text += "\nСлучайное число - " + Math.random();

// Math.floor();
// Math.ceil();
text += "\nСлучайное число от 0 до 10 - " + Math.floor(Math.random() * 11);

alert(text);