// This will load the dotenv library while we are in dev mode.
// Once we deploy to Heroku and are in production mode, Heroku handles
// our environment variable storage for us.
if (process.env.NODE_ENV !== "production") require("dotenv").config();

// We'll create this file shortly. It will contain some Express boilerplate.
const app = require("./server/app");
// Sets the default port for our serer to 5000 until one is set for us by Heroku.
const port = process.env.PORT || 5000;

// Gives us a message on our console to let us know our server is up and running.
app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});
