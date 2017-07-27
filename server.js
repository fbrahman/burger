const express = require ('express');
const methodOverride = require('method-override');
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const routes = require('./controllers/burgers_controller.js');

let PORT = process.env.PORT || 3000;

let app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended:false }));

app.use(methodOverride("_method"));

app.engine('handlebars', exphbs({ defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.use('/', routes);

app.listen(PORT);
