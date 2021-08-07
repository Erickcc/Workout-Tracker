const router = require('express').Router();
const workoutRoutes = require('./workoutRoutes');

// /api/<routes>
router.use('/users', workoutRoutes);

module.exports = router;
