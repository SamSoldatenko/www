
var isNolik = false;

function onSetFigure(col, row, event) {

    var checkbox = event.target;

    checkbox.disabled = true; // чтобы нельзя было выключить

    if(isNolik) {
        checkbox.classList.add("nolik"); // Чтобы показывался нолик а не крестик
    }
    isNolik = !isNolik; // Чтобы в следующий раз показывалась другая фигура
}