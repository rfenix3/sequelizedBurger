// Dependencies
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
//var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var db =  require("./models");

// Import router and give the server access to them.
var router = require("./controllers/burgersController.js");

// Create express app instance.
var app = express();
// Specify the port.
var port = 3000;

// app/public now becomes the root that is accessible to the main application.
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set("views", path.join(__dirname, "views"));

app.set('port', process.env.PORT || 3000 );
app.use("/", router);


db.sequelize.sync({force:false}).then(function() {
	app.listen(app.get('port'), function() {
  		console.log('Listening on port ' + app.get('port'));
	});
});
