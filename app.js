const express = require("express");
const app = express();
const homeController = require("./controllers/home");
const errorController = require("./controllers/error");
const layouts = require("express-ejs-layouts");
const weather = require("./utils/weather");

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 4000);
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.use(layouts);
app.use(express.static("public"));

app.get("/", homeController.home);

/* app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm); */

/* app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError); */

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});