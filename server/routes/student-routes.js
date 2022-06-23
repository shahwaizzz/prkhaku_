const express = require("express");
const router = express.Router();
const {
  ebookComment,
  paperComment,
  studyschemeComment,
  notesComment,
  signupNewsletter,
  search,
} = require("../controllers/student-controller");

router.post("/notes/comment/:id", notesComment);
router.post("/ebook/comment/:id", ebookComment);
router.post("/paper/comment/:id", paperComment);
router.post("/studyscheme/comment/:id", studyschemeComment);
router.post("/signup-newsletter", signupNewsletter);
router.get("/search", search);

module.exports = router;
