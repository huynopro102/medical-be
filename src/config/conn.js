const { connect } = require("mongoose");

const dbConnectionString = "mongodb+srv://nguyen_tuan_huy:dgFyyRbi3oK42sgk@cluster0.jbf7rol.mongodb.net/";

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
