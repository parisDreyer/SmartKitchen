const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateFavorites(data) {
    let errors = {};

    data.label = !isEmpty(data.label) ? data.label : '';
    data.url = !isEmpty(data.url) ? data.url : '';

    if (Validator.isEmpty(data.label)) {
        errors.label = 'Label field is required'
    }
    if (Validator.isEmpty(data.url)) {
        errors.url = 'URL field is required'
    }
    if (!Validator.isURL(data.url)) {
        errors.url = 'URL is invalid'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}