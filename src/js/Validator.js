export default class Validator {
  static validateUsername(username) {
    const regex = /^(?!.*\d{4})[a-zA-Z]([a-zA-Z0-9-_]*[a-zA-Z0-9])?[a-zA-Z]$/;
    return regex.test(username);
  }
}
