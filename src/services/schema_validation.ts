import Joi from "joi";

export const UserSchema: Joi.ObjectSchema<any> = Joi.object({
  firstName: Joi.string()
    .required()
    .pattern(new RegExp("^[a-zA-Z]*$"))
    .messages({
      "string.pattern.base": "First name must contain only letters",
      "string.empty": "First name is required",
    }),
  lastName: Joi.string()
    .required()
    .pattern(new RegExp("^[a-zA-Z]*$"))
    .messages({
      "string.pattern.base": "First name must contain only letters",
      "string.empty": "First name is required",
    }),
  login: Joi.string()
    .required()
    .pattern(new RegExp("^[a-zA-Z0-9]*$"))
    .messages({
      "string.pattern.base": "Login must contain only letters and numbers",
      "string.empty": "Login is required",
    }),
  password: Joi.string()
    .required()
    .pattern(new RegExp("^[a-zA-Z0-9]*$"))
    .messages({
      "string.pattern.base": "Password must contain only letters and numbers",
      "string.empty": "Password is required",
    }),
  age: Joi.number().required().min(4).max(130).messages({
    "number.min": "Age must be at least 4",
    "number.max": "Age must be at most 130",
    "number.empty": "Age is required",
  }),
});
