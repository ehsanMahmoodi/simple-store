const { Router } = require("express");
const authController = require("./auth.controller");
const router = Router();
router.get("/register", authController.renderRegisterPage);
router.post("/register", authController.register);
module.exports = {
  AuthRouter: router,
};
