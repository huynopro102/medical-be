const { connect } = require("mongoose");

const dbConnectionString = "mongodb+srv://huynopro102:qezhVAdgt1uC6A4X@cluster0.1qgyv.mongodb.net/";

connect(dbConnectionString, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
})
 .then(() => {
  console.log("Database Connected");
 })
 .catch((e) => {
  console.log("Database Connection Error");
 });
