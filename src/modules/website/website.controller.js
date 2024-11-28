const autoBind = require("auto-bind");
const httpCodes = require("http-codes");
const products = require("../products/products.json");
class WebsiteController {
  #service;
  constructor() {
    autoBind(this);
  }
  async renderHomePage(req, res, next) {
    try {
      res.render("./pages/index");
    } catch (error) {
      next(error);
    }
  }
  async renderAboutUsPage(req, res, next) {
    res.render("./pages/website/about-us");
  }
  async renderBlogsPage(req, res, next) {
    res.render("./pages/website/blogs");
  }
  async renderCasesStudyPage(req, res, next) {
    res.render("./pages/website/case-study");
  }
  async products(req, res, next) {
    const productList = products;
    res.render("./pages/website/products", { productList });
  }
}
module.exports = new WebsiteController();
