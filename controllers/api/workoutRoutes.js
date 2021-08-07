const router = require("express").Router();
const Workout = require("../../models/Workout.js");

// for addExercise function
router.put("/workouts/:id", ({ body }, res) => {
//   Transaction.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
});

// for createWorkout function
router.post("/workouts", (req, res) => {
//   Transaction.find({})
//     .sort({ date: -1 })
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
});

// for getWorkoutsInRange function
router.post("/workouts/range", (req, res) => {
    //   Transaction.find({})
    //     .sort({ date: -1 })
    //     .then(dbTransaction => {
    //       res.json(dbTransaction);
    //     })
    //     .catch(err => {
    //       res.status(400).json(err);
    //     });
});

module.exports = router;