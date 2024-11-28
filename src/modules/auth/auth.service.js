const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const { UserModel } = require("../user/user.model");
const { AuthMessages } = require("./auth.messages");
const { verifyPassword } = require("../../common/utils/functions");
const jwt = require("jsonwebtoken");
class AuthService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = UserModel;
  }
  async register(registerDto) {
    const user = await this.#model.findOne({ email: registerDto.email });
    if (user) throw new createHttpError.BadRequest(AuthMessages.EmailExist);
    const newUser = await this.#model.create(registerDto);
    if (!newUser)
      throw new createHttpError.InternalServerError(AuthMessages.RegisterError);
    const token = this.signAccessToken({ userId: newUser._id });
    return token;
  }
  async login(registerDto) {
    const user = await this.#model.findOne({ email: registerDto.email });
    if (!user) throw new createHttpError.BadRequest(AuthMessages.NotFound);
    if (!verifyPassword(registerDto.password, user.password))
      throw new createHttpError.BadRequest(AuthMessages.LoginError);
    const token = this.signAccessToken({ userId: user._id });
    return token;
  }
  signAccessToken(payload) {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET_KEY);
  }
}
module.exports = new AuthService();
