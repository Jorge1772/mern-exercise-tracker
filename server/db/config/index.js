// Loads the Mongoose library and gives us access to a bunch of functionality that
// will make interacting with our MongoDB database more structured and user
// friendly.
const mongoose = require("mongoose");

try {
  // connects to your MongoDB database via mongoose.
  // A lot of random configurations, but treat it
  // as boilerplate.
  mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  console.log("Connected to MongoDB");
} catch (e) {
  console.log(e.toString());
}
