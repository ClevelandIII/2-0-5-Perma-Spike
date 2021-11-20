const { StatusCodes } = require("http-status-codes");
const Challenge = require("../Models/challengeSchema");

const getChallenge = async (req, res) => {
  res.send("Single Challenge");
};
const getAllChallenge = async (req, res) => {
  const challenges = await Challenge.find({ createdBy: req.user.userID }).sort(
    "created at"
  );
  res.status(StatusCodes.OK).json({ challenges, length: challenges.length });
};

const createChallenge = async (req, res) => {
  const challenge = await Challenge.create(req.body);

  res.status(StatusCodes.CREATED).json({ challenge });
};

const updateChallenge = async (req, res) => {
  res.send("Update Challenge");
};

const deleteChallenge = async (req, res) => {
  res.send("Delete Challenge");
};

module.exports = {
  getChallenge,
  getAllChallenge,
  createChallenge,
  updateChallenge,
  deleteChallenge,
};
