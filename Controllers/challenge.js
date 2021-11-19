const { StatusCodes } = require("http-status-codes");

const getChallenge = async (req, res) => {
  res.send("Challenge");
};
const getAllChallenge = async (req, res) => {
  res.send("All Challenges");
};

const createChallenge = async (req, res) => {
  res.send("New Challenge");
};

const updateChallenge = async (req, res) => {
  res.send("Update Challenge");
};

const deleteChallenge = async (req, res) => {
  res.send("Delete Challenge");
};

module.exports = {getChallenge, getAllChallenge, createChallenge, updateChallenge, deleteChallenge}