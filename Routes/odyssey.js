const express = require("express");
const { getOdyssey, getAllOdyssey, createOdyssey, updateOdyssey, deleteOdyssey } = require("../Controllers/odyssey");
const router = express.Router();

router.route("/").get(getAllOdyssey)

router.route("/:id").get(getOdyssey).post(createOdyssey).patch(updateOdyssey).delete(deleteOdyssey)

module.exports = router;
