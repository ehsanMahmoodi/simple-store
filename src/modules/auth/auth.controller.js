const autoBind = require("auto-bind");
const httpCodes = require("http-codes");
const authService = require("./auth.service");
const { hashPassword } = require("../../common/utils/functions");
const { registerValidation } = require("./auth.validations");
class AuthController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = authService;
  }
  async renderRegisterPage(req, res, next) {
    res.locals.layout = "./layouts/auth/main.ejs";
    res.render("./pages/auth/register.ejs");
  }
  async register(req, res, next) {
    try {
      const {
        body: { fullname, email, password },
      } = req;
      await registerValidation.validateAsync({ fullname, email, password });
      const token = await this.#service.register({
        fullname,
        email,
        password: hashPassword(password),
      });
      res
        .status(httpCodes.OK)
        .cookie("access_token", token, {
          expires: new Date("March28,2025 18:23:00"),
        })
        .redirect("/");
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new AuthController();
