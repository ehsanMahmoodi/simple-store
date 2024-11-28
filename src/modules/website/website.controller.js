const autoBind = require("auto-bind");
const httpCodes = require("http-codes");
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
  async renderAboutUsPage(req,res,next){
      res.render('./pages/website/about-us')
  }
}
module.exports = new WebsiteController();
