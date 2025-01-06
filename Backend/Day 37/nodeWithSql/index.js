// require faker 
const { faker } = require('@faker-js/faker');
// require mysql2
const mysql = require('mysql2');
//require express
const express = require("express");
const app = express();
// require and setting for ejs
const path = require("path");
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, "public")))
//require and set up methodoverride
var methodOverride = require('method-override')
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// require uuid 
const { v4: uuidv4 } = require("uuid");

// generate fake data 
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}
// create connection between node and my sql 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'sql1132005',
});

//get/fetch and show total number of users
app.get("/", (req, res) => {
  let q = ` select count(*) from user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count })
    })
  } catch (error) {
    res.send("some error")
  }
});

//fetch and show id,username,email of all users
app.get("/user", (req, res) => {
  let q = `select * from user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("show.ejs", { users });
    })
  } catch (error) {
    res.send("some error in database")
  }
});

//edit (create form)
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `select * from user where id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      console.log(user);
      res.render("edit.ejs", { user });
    });
  } catch (error) {
    res.send("some error in database")
  }
});
//edit (edit username in database)
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body
  let q = `select * from user where id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("wrong password")
      }
      else {
        let q2 = `update user set username='${newUsername}' where id='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        })
      }
    });
  } catch (error) {
    res.send("some error in database")
  }
});

// add new user
app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/user/new", (req, res) => {
  let { username, email, password } = req.body;
  let id = uuidv4();
  let q = `insert into user (id,username,email,password) values ('${id}','${username}','${email}','${password}')`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result)
      res.redirect("/user");
    });
  } catch (error) {
    res.send("some error in database")
  }
});

//delete user
app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `select * from user where id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (error) {
    res.send("some error in database")
  }

});

app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password } = req.body;
  let q = `select * from user where id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (password != user.password) {
        res.send("wrong password");
      }
      else {
        let q2 = `delete from user where id='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        })
      }
    });
  } catch (error) {
    res.send("some error in database")
  }
})

// app.delete("/user/:id", (req, res) => {
//   let { id } = req.params;
//   user = user.filter((u) => id !== u.id)
//   res.redirect("/user")
// })

app.listen("8080", () => {
  console.log("app is listening on port 8080");
});
// connection.end();

// using sql through query
//inserting new data
// let q = "insert into user (id,username,email,password) values ?";
// let data = [];
// for (let i = 1; i <= 100; i++) {
//   data.push(getRandomUser());
// };