// Loads our database connection
require("./db/config");
const express = require("express"),
  path = require("path"),
  exercisesRouter = require("./routes/exercises"),
  cors = require("cors"),
  usersRouter = require("./routes/users");

const app = express();

/* enables the Express server to respond to requests, makes your server 
accessible to any domain that requests a resource from your server via a browser */
app.use(cors());

// Middleware
app.use(express.json());

// routes
app.use(exercisesRouter);
app.use(usersRouter);

// These lines will serve any static files once we push this to Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}
module.exports = app;
