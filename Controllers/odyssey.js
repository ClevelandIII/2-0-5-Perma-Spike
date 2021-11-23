const { StatusCodes } = require("http-status-codes");
const Odyssey = require("../Models/odysseySchema");
const NotFoundError = require("../Error/notFound");

const getOdyssey = async (req, res) => {
  const { id: odysseyID } = req.params;

  const odyssey = await Odyssey.findOne({
    _id: odysseyID,
  });

  if (!odyssey) {
    throw new NotFoundError(`${odysseyID} not found!`);
  }

  res.status(StatusCodes.OK).json({ odyssey });
};
const getAllOdyssey = async (req, res) => {
  let odyssey = await Odyssey.find({}).sort("created at");

  odyssey.map((single) => {
    const {
      CreatedBy,
      Name,
      Options: { extremeMode },
    } = single;
    return { CreatedBy, Name, extremeMode };
  });

  res.status(StatusCodes.OK).json({ odyssey, length: odyssey.length });
};

const createOdyssey = async (req, res) => {
  req.body.createdBy = req.user.userID;
  const odyssey = await Odyssey.create(req.body);
  console.log(odyssey);
  res.status(StatusCodes.CREATED).json({ odyssey });
};

const updateOdyssey = async (req, res) => {
  const {
    body,
    user: { userID },
    params: { id: odysseyID },
  } = req;

  const odyssey = await Odyssey.findByIdAndUpdate(
    { _id: odysseyID, createdBy: userID },
    req.body,
    { new: true, runValidators: true }
  );

  if (!odyssey) {
    throw new BadRequestError(`No new odyssey with ${odysseyID}`);
  }

  res.status(StatusCodes.OK).json({ odyssey });
};

const deleteOdyssey = async (req, res) => {
  const {
    params: { id: odysseyID },
    user: { userID },
  } = req;

  const odyssey = await Odyssey.findOneAndRemove({
    _id: odysseyID,
    createdBy: userID,
  });

  res.status(StatusCodes.OK).json({ odyssey });
};

module.exports = {
  getAllOdyssey,
  getOdyssey,
  createOdyssey,
  updateOdyssey,
  deleteOdyssey,
};
