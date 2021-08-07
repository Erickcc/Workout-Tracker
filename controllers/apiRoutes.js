const router = require("express").Router();
const Workout = require("../models/Workout.js");

// for getlastworkout function
router.get("/workouts", ({ body }, res) => {
    Workout.find({}).sort({'day':1})
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

// for createWorkout function, creates new workout
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
    

// for addExercise function, updates by id
router.put("/workouts/:id", ({ body }, res) => {
  Workout.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


// for getWorkoutsInRange function, gets all workouts (limit to the last 7)
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