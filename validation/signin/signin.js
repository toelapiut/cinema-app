import validate from "validate.js";


export default (credential) => {
  var constraints = {
    email: {
      email: true,
      presence: true,
    },
    password: {
      presence: true,
    }
  }
  return validate(credential, constraints);
}
