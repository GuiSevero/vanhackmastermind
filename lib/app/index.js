var express = require('express'),
    config = require('./config.js'),
    expressLayouts = require('express-ejs-layouts'),
    bodyParser = require('body-parser');

var app = express();
app.config = config;

app.set('port', config.port);
app.set('views', config.view_dir);
app.set('view engine', 'ejs');
app.set('layout', 'layouts/index'); // defaults to 'layout'
app.set("layout extractScripts", true);

app.use(expressLayouts);
app.use(express.static(config.public_dir));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));



app.use(require('./routes.js'));

app.listen(config.port, function() {
    console.log("Listening on " + config.port);
});

module.exports = app;