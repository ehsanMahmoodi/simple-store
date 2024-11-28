const { Router } = require("express");
const { WebsiteRouter } = require("./modules/website/website.routes");
const router = Router();
router.use('/',WebsiteRouter)
module.exports = {
  MainRouter: router,
};