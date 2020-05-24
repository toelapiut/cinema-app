import validate from "validate.js";


export default (credential) => {
  var constraints = {
    email: {
      email: true,
      presence: true,
    },
    password: {
      presence: true,
      length: {
        minimum: 6,
        message: "must be at least 6 characters"
      }
    }
  }
  return validate(credential, constraints);
}
