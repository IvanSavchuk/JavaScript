function buttonClick(button) {
    alert("Вы нажали на кнопку. Кнопка имеет имя " 
    + button.name + ", также value равно " 
    + button.value + ".");
}

var counter = 0;
function OnMouseCounter(element) {
    counter++;
    element.innerHTML = "На этот текст было наведено " + counter + " раз";
}