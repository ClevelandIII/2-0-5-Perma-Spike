const { StatusCodes } = require("http-status-codes");
const Challenge = require("../Models/challengeSchema");
const NotFoundError = require("../Error/notFound");

const getChallenge = async (req, res) => {
  const { id: challengeID } = req.params;

  const challenge = await Challenge.findOne({
    _id: challengeID,
  });

  if (!challenge) {
    throw new NotFoundError(`${challengeID} not found!`);
  }

  res.status(StatusCodes.OK).json({ challenge });
};

const getAllChallenges = async (req, res) => {
  let challenge = await Challenge.find({}).sort("created at");

  challenge.map((single) => {
    const { CreatedBy, Name, Map } = single;
    return { CreatedBy, Name, Map };
  });

  res.status(StatusCodes.OK).json({ challenge, length: challenge.length });
};

const createChallenge = async (req, res) => {
  req.body.CreatedBy = req.user.userID;
  const challenge = await Challenge.create(req.body);
  console.log(challenge);
  res.status(StatusCodes.CREATED).json({ challenge });
};

const updateChallenge = async (req, res) => {
  const {
    body: {
      Name: name,
      Map: map,
      Difficulty: difficulty,
      Lives: lives,
      Cash: cash,
      Monkeys: monkeys,
      Options: options,
    },
    user: { userID },
    params: { id: challengeID },
  } = req;

  // if (!name || !map || !difficulty || !lives || !cash || !monkeys || !options) {
  //   throw new BadRequestError(
  //     "Please provide a name, and map, difficulty, and lives, and cash, and monkeys, and options"
  //   );
  // }

  const challenge = await Challenge.findByIdAndUpdate(
    { _id: challengeID, CreatedBy: userID },
    req.body,
    { new: true, runValidators: true }
  );

  if (!challenge) {
    throw new BadRequestError(`no challenge with ${challengeID}`);
  }

  res.status(StatusCodes.OK).json({ challenge });
};

const deleteChallenge = async (req, res) => {
  const {
    params: { id: challengeID },
    user: { userID },
  } = req;

  const challenge = await Challenge.findOneAndRemove({
    _id: challengeID,
    CreatedBy: userID,
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
