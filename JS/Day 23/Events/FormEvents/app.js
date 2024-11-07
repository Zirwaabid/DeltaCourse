const form = document.querySelector("form")

form.addEventListener("submit", function (evt) {
    evt.preventDefault();

    console.log("form was submitted")
    let user = this.elements[0];
    let pass = this.elements[1];
    console.log(user.value);
    console.log(pass.value);
    alert(`Hi ${user.value} your password is set to ${pass.value}`)
})

//more events
let user = document.querySelector("#user");
user.addEventListener("change", function () {
    console.log("change event");
    console.log("final value=", this.value)
})
user.addEventListener("input", function () {
    console.log("input event");
    console.log("final value=", this.value)
})
