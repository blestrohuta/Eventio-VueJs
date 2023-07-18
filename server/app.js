if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const Controller = require("./controllers/");
const errorHandlers = require("./middlewares/errorHandlers");
const cors = require("cors");
const authentication = require("./middlewares/authentication");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/register", Controller.register);
app.post("/login", Controller.login);
app.use(authentication);
app.get("/taxonomies", Controller.getTaxonomies);
app.get("/events/:name", Controller.getEventDetail);
app.get("/hotels", Controller.getHotels);
app.get("/eventDetail/:id", Controller.getEventById);
app.use(errorHandlers);

app.listen(port, () => {
  console.log(`This app listening on port ${port}`);
});
