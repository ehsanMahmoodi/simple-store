const { Router } = require("express");
const { WebsiteRouter } = require("./modules/website/website.routes");
const { AuthRouter } = require("./modules/auth/auth.routes");
const router = Router();
router.use('/',WebsiteRouter)
router.use('/auth',AuthRouter)
module.exports = {
  MainRouter: router,
};