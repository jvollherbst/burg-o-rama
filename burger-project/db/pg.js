var pg = require('pg');
var connectionString = 'postgres://jasminecardoza:' + process.env.DB_PASSWORD + '@localhost/burgers_db';


function showBurgers(req, res, next){
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      done()
      console.log(err)
      return res.status(500).json({success: false, data: err})
    }
    var query = client.query('SELECT * FROM movies', function(err, result) {
      done()
      if (err) {
        return console.error('error running query', err);
      }
      res.rows = result.rows;
      next()
    });
  });
  console.log('test');
}

function addBurgers(req, res, next) {
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }
    //console.log(req.body);
    var query = client.query("INSERT INTO burgers (title, year, rating, director, actors, plot, poster) VALUES($1, $2, $3, $4, $5, $6, $7)",
    [req.body.title, ],
    function(err, result) {
      done()
      if(err) {
        return console.error('error, running query', err);
      }
      next()
    });
  });
}






module.exports.showBurgers = showBurgers;
module.exports.addBurgers = addBurgers;
