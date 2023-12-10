const mysql = require('mysql');
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

//database creation
// conn.connect(function(err){
//   if(err) throw err;
//   console.log("Connected!");
//   conn.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

//table creation
// conn.connect(function(err){
//   if(err) throw err;
//   console.log("Connected!");
//   const q="CREATE TABLE customers ( id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
//   conn.query(q, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

//inserting data
// conn.connect(function(err){
//   if(err) throw err;
//   console.log("Connected!");
//   const q="INSERT INTO customers ( name , address) VALUES ('Company Inc', 'Highway 37')";
//   conn.query(q, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

//selecting data
// conn.connect(function(err){
//   if(err) throw err;
//   console.log("Connected!");
//   const q="SELECT * FROM  customers";
//   conn.query(q, function (err, result,fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


//selecting with filter
// conn.connect(function(err){
//   if(err) throw err;
//   console.log("Connected!");
//   const q="SELECT * FROM  customers WHERE address = 'Park Lane 38'";
//   conn.query(q, function (err, result,fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

//update data
// conn.connect(function(err){
//   if(err) throw err;
//   console.log("Connected!");
//   const q="UPDATE customers SET address = 'Canyon 123' WHERE address = 'Park Lane 38'";
//   conn.query(q, function (err, result) {
//     if (err) throw err;
//     console.log(result.affectedRows + " record(s) updated");
//   });
// });

//populate table with data
conn.connect(function(err){
  if(err) throw err;
  console.log("Connected!");
  const q="INSERT INTO customers (name, address) VALUES ?";
  const values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ];
  conn.query(q,[values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});