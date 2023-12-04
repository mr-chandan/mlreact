


var menu = document.getElementById("menu")
var menuitemns = document.getElementById("items")

menu.addEventListener('click', function () {
    console.log("Ddd")
    menuitemns.classList.add('memnutogl');
});

var cross = document.getElementById("cross")

cross.addEventListener('click', function () {
    console.log("Ddd")
    menuitemns.classList.remove('memnutogl');
});