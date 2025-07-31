const express = require("express");
const app = express();
const app_env = app.settings.env;

//middleware
app.set("port", 8080);

app.listen(app.get("port"), (error) => {
  if (error) {
    console.log("Error during app startup", error);
  }
  console.log(
    `Application started in ${app_env} mode on port ${app.get("port")}`
  );
});
