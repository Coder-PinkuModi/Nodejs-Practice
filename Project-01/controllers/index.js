const fs = require("fs");
const path = require("path")
const util = require("util");
const mongoose=require("mongoose")
const User = require("../models/user");


const writeFile = util.promisify(fs.writeFile); // to promisify these functions, so we don't have to give callback in this things and looks our file clean
const unlinkFile = util.promisify(fs.unlink); // to promisify these functions, so we don't have to give callback in this things and looks our file clean

async function handleEntryofAll(req, res) {
  // sends name of every user and their email
  const alldbUser = await User.find({});
  const html = `<ul>${alldbUser
    .map(
      (user) => `<li>${user.first_name} ${user.last_name}-${user.email}</li>`
    )
    .join("")}</ul>`;
  // console.log(req.body)
  res.send(html);
}

async function handleGetAllUsers(req, res) {
  // console.log(req.body)
  const data = await User.find({});
  console.log("data", data);
  res.status(200).json(data);
}

async function handleDownloadData(req, res) {
  const data = await User.find({}); //here User is the model connected to mongoose
  const jsondata = JSON.stringify(data); // converting data to json file if not
  const filePath = path.join(__dirname, 'data.json'); //defining a path for the temporary file to store the data
  await writeFile(filePath, jsondata); // writing the data in the file in the given path
  res.download(filePath, "data.json", async (err) => {
    if (err) {
      console.error("Error during file download:", err);
      res.status(500).send("Error during file download");
    } else {
      res.status(200);
      await unlinkFile(filePath); // removing the temporary file after the work is done that is when send to download the client
    }
  });
}

async function handleCreateUser(req, res) {
  //creates new user in the databsse in the particular collection, with the model schema defined
  const body = req.body;
  console.log("body ", body);
  if (
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.city ||
    !body.job_title
  ) {
    return res.status(400).json({ Status: "user didn't sent proper data" });
  }
  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    city: body.city,
    job_title: body.job_title,
  });
  res.status(201).json({ status: "success", result });

}

async function handleUserbyId(req, res) {
  //sends the user data of particular id
  const id = req.params.id;
  const data = await User.findById(id);
  console.log(data);
  return res.status(200).send(data);
}

async function handleUpdateUser(req,res){
    const body = req.body;
    if (
      !body.first_name ||
      !body.last_name ||
      !body.email ||
      !body.gender ||
      !body.city ||
      !body.job_title
    ) {
      return res.status(400).json({ Status: "user didn't sent proper data" });
    }

    const id = req.params.id;
    // const objectId =mongoose.Types.ObjectId(id)
    const data =await User.findByIdAndUpdate(id,body,{new:true})
    // console.log(indexUser);
    // users[indexUser] = { ...users[indexUser], ...body }; // this approach was used when we didnt connect our database and playing with the file MOCK_DATA.json
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    //   res.status(200);
    // });

    return res.status(200).json({ status: "Updated Successfully", data });
}

module.exports = {
  handleEntryofAll,
  handleGetAllUsers,
  handleDownloadData,
  handleCreateUser,
  handleUserbyId,
  handleUpdateUser,
};
