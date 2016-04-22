/**
 * Created by ElhadyA on 4/22/2016.
 */
/**
 * Created by origi_000 on 4/17/2016.
 */
var mysql=require('mysql')
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'anproz',
  database : 'kenkof'
});

connection.connect(function(err){
  if(!err) {
    console.log("Database is connected ... nn");
  } else {
    console.log("Error connecting database ... nn"+error);
  }
});

connection.query('SELECT * from cron', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();
