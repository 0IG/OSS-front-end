const isValidEmail = (email) => {
  const emailValidation = /(.+)@(.+){2,}\.(.+){2,}/;
  return emailValidation.test(email);
};

module.exports = { isValidEmail };
