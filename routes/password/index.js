const express = require("express");
const appRoute = express.Router();

const { passwordOTP, passwordReset, passwordSuccess } = require('../../controllers/password/password');

appRoute.get('/password-otp', passwordOTP);
appRoute.get('/password-reset', passwordReset);
appRoute.get('/password-success', passwordSuccess);

module.exports = appRoute;


