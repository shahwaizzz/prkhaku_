const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Provide Title"],
    minlength: 5,
    maxlength: 45,
  },
  subject: {
    type: String,
    required: [true, "Please Provide Subject"],
  },
  class: {
    type: String,
    required: [true, "Please Provide Class"],
  },
  comments: [
    {
      comment: String,
      studentName: String,
    },
  ],
  chapter: {
    type: String,
    required: [true, "Please Provide Chapter"],
  },
  notesImage: {
    type: String,
    required: [true, "Please Provide Notes Image"],
  },
  notesDoc: {
    type: String,
    required: [true, "Please Provide Notes Document"],
  },
});

module.exports = mongoose.model("Notes", notesSchema);
