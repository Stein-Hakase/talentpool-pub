const express = require("express");
const appRoute = express.Router();

const { passwordOTP, passwordReset, recoverPassword } = require('../../controllers/password/password');

appRoute.get('/password-otp', passwordOTP);
appRoute.get('/password-reset', passwordReset)
appRoute.get('/recover-password', recoverPassword);

module.exports = appRoute;


