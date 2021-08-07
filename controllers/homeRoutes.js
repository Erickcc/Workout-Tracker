const router = require("express").Router();
const path = require("path");

// Home page
router.get("/", ({ body }, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Stats page
router.get("/stats", ({ body }, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// Exercose page
router.get("/exercise", ({ body }, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router;