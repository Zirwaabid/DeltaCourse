// require faker 
const { faker } = require('@faker-js/faker');
// generate fake data 
let getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}
// require mysql2
const mysql = require('mysql2');
// create connection between node and my sql 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'sql1132005',
});
// using sql through query 
try {
  connection.query("SHOW TABLES", (err, res) => {
    if (err) throw err;
    console.log(res);
  })
} catch (error) {
  console.log(error);
}
connection.end();
