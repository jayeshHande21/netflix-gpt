export const checkValidate = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);

  const isPasswordValid = /(?=.*?[0-9])/.test(password);

  if (!isEmailValid) return "Email address is not valid";

  if (!isPasswordValid) return "Password is not valid";

  return null;
};
