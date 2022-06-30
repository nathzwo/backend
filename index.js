const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");
// inicializaciones
const app = express();
//configuraciones
app.set('port', process.env.PORT || 5500);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs", exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./src/lib/handlebars"),
  })
);
app.set("view engine ", ".hbs");
// middlewars// peticiones
app.use(morgan("dev"));
app.use(express.urlencoded({ extends: false }));
app.use(express.json());
//variables globales
app.use((req, res, next) => {
  next();
});
//rutas
app.use(require("./src/routes/index"));
app.use(require("./src/routes/authetication"));
app.use('/links', require('./src/routes/links'));

//public
app.use(express.static(path.join(__dirname, "public")));
//starting server
app.listen(app.get("port"), () => {
  console.log("Puerto conectado", app.get("port"));
});

