const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Workout schema, built taking the seeds format into consideration
const workoutSchema = new Schema({
  day: {
    type: Date,
  },
  excercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter exercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter exercise name",
      },
      duration: {
        type: Number,
        default: 0,
      },
      weight: {
        type: Number,
        default: 0,
      },
      reps: {
        type: Number,
        default: 0,
      },
      sets: {
        type: Number,
        default: 0,
      },
      distance: {
        type: Number,
        default: 0,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
