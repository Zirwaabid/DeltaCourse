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