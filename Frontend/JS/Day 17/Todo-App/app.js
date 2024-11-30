let todo = [];
let req = prompt("Enter your request")
while (true) {
    if (req == "quit") {
        console.log("Quiting app");
        break
    }

    if (req == "list") {
        console.log("------------")
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("------------")
    }

    else if (req == "add") {
        let task = prompt("Enter a task you want to add")
        todo.push(task)
        console.log("task added");

    }
    else if (req == "delete") {
        let index = prompt("Enter index of task you want to delete");
        todo.splice(index, 1)
        console.log("task deleted");
    }
    req = prompt("Enter your request");

}