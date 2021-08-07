const router = require("express").Router();
const path = require("path");

router.get("/", ({ body }, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/stats", ({ body }, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/exercise", ({ body }, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// router.get("/exercise?", ({ body }, res) => {

// });

module.exports = router;