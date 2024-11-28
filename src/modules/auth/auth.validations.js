const Joi = require("joi");

const registerValidation = Joi.object({
  fullname: Joi.string().min(3).required().messages({
    "any.required": "نام الزامیست.",
    "string.empty": "نام الزامیست.",
    "string.min": "نام باید حداقل 3 کاراکتر باشد.",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "ایمیل الزامیست.",
    "string.empty": "ایمیل الزامیست.",
    "string.email": "ایمیل نامعتبر می باشد.",
  }),
  password: Joi.string().min(8).max(20).required().messages({
    "any.required": "رمز عبور الزامیست.",
    "string.empty": "رمز عبور الزامیست.",
    "string.min": "رمز عبور باید حداقل 8 کاراکتر باشد.",
    "string.max": "رمز عبور باید حداکثر 20 کاراکتر باشد.",
  }),
});
module.exports = { registerValidation };
