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
}
module.exports = new WebsiteController();
