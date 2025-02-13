const { Router } = require("express");
const websiteController = require("./website.controller");
const router = Router();
router.get('/',websiteController.renderHomePage)
router.get('/about-us',websiteController.renderAboutUsPage)
router.get('/blogs',websiteController.renderBlogsPage)
router.get('/case-study',websiteController.renderCasesStudyPage)
router.get('/products',websiteController.products)
module.exports = {
  WebsiteRouter: router,
};