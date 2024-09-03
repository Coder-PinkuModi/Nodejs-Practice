const mongoose = require("mongoose");

async function mongoDBconnect(url) {
  return  await mongoose.connect(url);
}

module.exports = mongoDBconnect;
