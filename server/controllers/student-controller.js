const Ebook = require("../models/ebook-model");
const Paper = require("../models/paper-model");
const Notes = require("../models/notes-model");
const StudyScheme = require("../models/study-scheme-model");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");
const ebookComment = async (req, res) => {
  const doc = await Ebook.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { comments: req.body } },
    {
      new: true,
      runValidators: true,
    }
  );
  console.log("heelo");
  if (!doc) {
    throw new NotFoundError("This document does not exist");
  }
  res.status(StatusCodes.OK).json({ msg: "Comment Added" });
};
const paperComment = async (req, res) => {
  const doc = await Paper.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { comments: req.body } },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!doc) {
    throw new NotFoundError("This document does not exist");
  }
  res.status(StatusCodes.OK).json({ msg: "Comment Added" });
};
const notesComment = async (req, res) => {
  const doc = await Notes.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { comments: req.body } },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!doc) {
    throw new NotFoundError("This document does not exist");
  }
  res.status(StatusCodes.OK).json({ msg: "Comment Added" });
};
const studyschemeComment = async (req, res) => {
  const doc = await StudyScheme.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { comments: req.body } },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!doc) {
    throw new NotFoundError("This document does not exist");
  }
  res.status(StatusCodes.OK).json({ msg: "Comment Added" });
};

module.exports = {
  ebookComment,
  paperComment,
  notesComment,
  studyschemeComment,
};
