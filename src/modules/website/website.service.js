const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
class WebsiteService {
  constructor() {
    autoBind(this);
  }
}
module.exports = new WebsiteService();
