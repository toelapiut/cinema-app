import validate from "validate.js";

export default (credential) => {
  var constraints = {
    firstName: {
      presence: {
        allowEmpty: false
      }
    },
    lastName: {
      presence: {
        allowEmpty: false
      }
    },
    email: {
      email: true,
      presence: true,
    },
    password: {
      presence: {
        allowEmpty: false
      },
      length: {
        minimum: 6,
        message: "must be at least 6 characters"
      }
    },
    confirmPassword: {
      presence: {
        allowEmpty: false
      },
      equality: "password"
    }
  }
  return validate(credential, constraints);
}