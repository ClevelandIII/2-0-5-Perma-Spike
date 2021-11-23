const { StatusCodes } = require("http-status-codes");
const Challenge = require("../Models/challengeSchema");
const NotFoundError = require("../Error/notFound");

const getChallenge = async (req, res) => {
  const { userID } = req.user;
  const { id: challengeID } = req.params;

  const challenge = await Challenge.findOne({
    createdBy: userID,
    _id: challengeID,
  });

  if (!challenge) {
    throw new NotFoundError(`${challengeID} not found!`);
  }

  res.status(StatusCodes.OK).json({ challenge });
};

const getAllChallenges = async (req, res) => {
  const challenge = await Challenge.find({ createdBy: req.user.userID }).sort(
    "created at"
  );
  res.status(StatusCodes.OK).json({ challenge, length: challenge.length });
};

const createChallenge = async (req, res) => {
  req.body.createdBy = req.user.userID;
  const challenge = await Challenge.create(req.body);
  console.log(challenge);
  res.status(StatusCodes.CREATED).json({ challenge });
};

const updateChallenge = async (req, res) => {
  res.send("Update Challenge");
};

const deleteChallenge = async (req, res) => {
  const {
    params: { id: challengeID },
    user: { userID },
  } = req;

  const challenge = await Challenge.findOneAndRemove({
    _id: challengeID,
    createdBy: userID,
  });

  res.status(StatusCodes.OK).json({ challenge });
};

module.exports = {
  getChallenge,
  getAllChallenges,
  createChallenge,
  updateChallenge,
  deleteChallenge,
};
