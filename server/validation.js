const Joi = require("joi");

exports.expenceValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    category: Joi.string()
      .valid("food", "travel", "shopping", "others")
      .required(),
    description: Joi.string().optional(),
    amount: Joi.number().required(),
    date: Joi.date().required(),
  });
  return schema.validate(data);
};
