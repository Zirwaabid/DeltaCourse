let btns = document.querySelectorAll("button")

for (const btn of btns) {
    btn.addEventListener("click", sayHello)
    btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function () {
        console.log("you double clicked me");
    });
}
function sayHello() {
    alert("AslamuAlikum");
}
function sayName() {
    alert("Zirwa Abid")
}