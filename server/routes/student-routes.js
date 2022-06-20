const express = require("express");
const router = express.Router();
const {
  ebookComment,
  paperComment,
  studyschemeComment,
  notesComment,
} = require("../controllers/student-controller");

router.post("/notes/comment/:id", notesComment);
router.post("/ebook/comment/:id", ebookComment);
router.post("/paper/comment/:id", paperComment);
router.post("/studyscheme/comment/:id", studyschemeComment);

module.exports = router;
