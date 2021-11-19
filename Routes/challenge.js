const express = require("express");
const { getChallenge, getAllChallenge, createChallenge, updateChallenge, deleteChallenge } = require("../Controllers/challenge");
const router = express.Router();

router.route("/").get(getAllChallenge).post(createChallenge)

router.route("/:id").get(getChallenge).patch(updateChallenge).delete(deleteChallenge)

module.exports = router;
