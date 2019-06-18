const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.babyName = !isEmpty(data.babyName) ? data.babyName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Name checks
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First name field is required";
  } else if (Validator.isLength(data.firstName, { min: 2, max: 20 })) {
    errors.firstName = "First name must be between 2 and 20 characters.";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last name field is required";
  } else if (Validator.isLength(data.lastName, { min: 2, max: 50 })) {
    errors.lastName = "Last name must be between 2 and 20 characters.";
  }

  // Baby name checks
  if (Validator.isEmpty(data.babyName)) {
    errors.babyName = "Baby name field is required";
  } else if (Validator.isLength(data.babyName, { min: 2, max: 50 })) {
    errors.babyName = "Baby name must be between 2 and 50 characters.";
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
