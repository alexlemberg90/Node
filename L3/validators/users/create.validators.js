const Joi = require('joi');

const { EMAIL_REGEXP, PASSWORD_REGEXP } = require('../../constants/regexps/regexp.enum');

module.exports = Joi.object({
    firstname: Joi.string().alphanum().min(2).max(50)
        .required(),
    lastname: Joi.string().alphanum().min(2).max(50)
        .required(),
    email: Joi.string().regex(EMAIL_REGEXP).required(),
    password: Joi.string().regex(PASSWORD_REGEXP).trim().required()
});
