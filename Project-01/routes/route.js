const express = require("express");
const router = express.Router();

const {
  handleEntryofAll,
  handleGetAllUsers,
  handleDownloadData,
  handleCreateUser,
  handleUserbyId,
  handleUpdateUser,
} = require("../controllers/index.js");

router.get("/entry", handleEntryofAll); // for phone or users other than pc or developer

router.get("/", handleGetAllUsers); // route to get all the users fectched and printed

router.get("/download", handleDownloadData); // route to download file of the exisitng data of the users

router.post("/", handleCreateUser);

router
  .route("/:id")
  .get(handleUserbyId)
  .patch(handleUpdateUser);

module.exports = router;
