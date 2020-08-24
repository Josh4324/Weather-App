const express = require("express");
const app = express();
const homeController = require("./controllers/home");
const errorController = require("./controllers/error");
const layouts = require("express-ejs-layouts");
const router = express.Router();
const methodOverride = require("method-override");


app.set("view engine", "ejs");
app.set("port", process.env.PORT || 4000);

app.use(
    methodOverride("_method", {
        methods: ["POST", "GET"]
    })
);

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.use(layouts);
app.use(express.static("public"));



app.get("/", homeController.index, homeController.indexView);
app.get("/map", homeController.mapView)
app.post("/search", homeController.search, homeController.indexView);


app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});