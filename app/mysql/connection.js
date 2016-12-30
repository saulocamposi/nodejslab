var mysql = require('mysql');
var connection = mysql.createConnection({
                  host : "localhost",
                  user: "root",
                  password : "123",
                  port : "3306",
                  database : "nodejs",
                });

connection.connect();

connection.query('select * from product', function(err, rows, fields){
  if(!err)
    console.log('the solution is rows', rows);
    else
    console.log('Error while performing Query');
  });

connection.end();
