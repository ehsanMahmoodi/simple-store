const { Router } = require("express");
const authController = require("./auth.controller");
const router = Router();
router.get("/register", authController.renderRegisterPage);
router.post("/register", authController.register);
router.get('/login',authController.renderLoginPage)
router.post('/login',authController.login)
module.exports = {
  AuthRouter: router,
};
