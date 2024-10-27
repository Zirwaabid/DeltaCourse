// this in javascript
const student = {
    name: "Zirwa",
    age: 19,
    math: 96,
    phy: 97,
    eng: 99,
    getAvg() {
        // console.log(this);
        let avg = (this.math + this.phy + this.eng) / 3;
        console.log(`The average marks of ${this.name} is ${avg}`)
    }
}
console.log(student.getAvg())