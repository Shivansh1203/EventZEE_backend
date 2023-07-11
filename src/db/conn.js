const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shivansh_r:shivansh_r1234@shivanshrastogi.dvc9hjy.mongodb.net/studentRegn?retryWrites=true&w=majority")
.catch((err) => console.log(err));

