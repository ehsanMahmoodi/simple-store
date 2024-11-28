const { Router } = require("express");
const websiteController = require("./website.controller");
const router = Router();
router.get('/',websiteController.renderHomePage)
router.get('/about-us',websiteController.renderAboutUsPage)
module.exports = {
  WebsiteRouter: router,
};