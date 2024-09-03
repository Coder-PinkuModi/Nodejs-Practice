// paste schema and model here// creating a schema for datatbase using mongoose
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: {
      type: String, // this restricts first_name to string type
      required: true, // if we give this then it means that the particular field is necessary to be present in the data comming, here first_name
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true, // by doing this we restrict the coming data to be unique with the data present in our database, i.e. after data recieving it will check that the email entered it unique or not and then will proceed accordingly
    },
    gender: {
      type: String,
      required: true,
    },
    job_title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps:true,
  });
  
  // creating a model for the database
  const User = mongoose.model("user", userSchema);

  module.exports=User;