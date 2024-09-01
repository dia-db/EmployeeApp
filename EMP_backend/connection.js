const mongoose = require("mongoose");
mongoose
  .connect(
   "mongodb+srv://DIA:dhiyabiju@cluster0.3wzqtez.mongodb.net/employeeApp?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });


  