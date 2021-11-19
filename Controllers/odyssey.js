const { StatusCodes } = require("http-status-codes");

const getOdyssey = async (req, res) => {
  res.send("Odyssey");
};
const getAllOdyssey = async (req, res) => {
  res.send("Every Odyssey");
};

const createOdyssey = async (req, res) => {
  res.send("New Odyssey");
};

const updateOdyssey = async (req, res) => {
  res.send("Update Odyssey");
};

const deleteOdyssey = async (req, res) => {
  res.send("Delete Odyssey");
};

module.exports = {getAllOdyssey, getOdyssey, createOdyssey, updateOdyssey, deleteOdyssey}