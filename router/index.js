const express = require('express');
const router = express.Router();
const controllers = require('../controller');

router.get('/home',controllers.homeController.getHomePage);

// router.get('/home', (req, res) => {
//     res.send('This is the home page');
// });

// router.get('/about', (req, res) => {
//     res.send('This is the about page');
// });

module.exports = router;
