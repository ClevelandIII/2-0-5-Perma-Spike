const { StatusCodes } = require("http-status-codes");
const Challenge = require("../Models/challengeSchema");

const getChallenge = async (req, res) => {
  const { userID } = req.user.userID;
  const { id: challengeID } = req.params;

  const challenge = await Job.findOne({ createdBy: userID, _id: challengeID });

  if (!challenge) {
    throw new NotFoundError(`No job with ${challengeID}`);
  }

  res.status(StatusCodes.OK).json({ challenge });
};
const getAllChallenge = async (req, res) => {
  res.send("All Challenges");
};

const createChallenge = async (req, res) => {
  req.body.createdBy = req.user.userID;
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
