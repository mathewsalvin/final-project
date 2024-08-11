const mongoose = require("mongoose");
//Write missing code 
mongoose
.connect('mongodb+srv://kp:kp123@cluster0.hfahgm8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
   
)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
