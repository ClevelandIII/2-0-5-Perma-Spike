const express = require("express");
const { getOdyssey, getAllOdyssey, createOdyssey, updateOdyssey, deleteOdyssey } = require("../Controllers/odyssey");
const router = express.Router();

router.route("/").get(getAllOdyssey).post(createOdyssey)

router.route("/:id").get(getOdyssey).patch(updateOdyssey).delete(deleteOdyssey)

module.exports = router;
