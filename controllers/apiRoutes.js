const router = require("express").Router();
// Import workout model
const Workout = require("../models/Workout.js");

// for getlastworkout function
// Gets the newest workout, gets called once you join the home page
router.get("/workouts", ({ body }, res) => {
  Workout.find({})
    .sort({ day: -1 })
    .limit(2)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// for createWorkout function, creates new workout
router.post("/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// for addExercise function, updates by id
// Adds a new exercise to an existing workout
router.put("/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// for getWorkoutsInRange function, gets all workouts (limit to the last 7)
// Get the sum of the duration and weight of each exercise
router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
        totalWeight: { $sum: "$exercises.weight" },
      },
    },
  ])
    .sort({ day: -1 })
    .limit(7)
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
