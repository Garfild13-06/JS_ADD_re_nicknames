import Validator from '../Validator';

test('should not validate correct username ending digits', () => {
  expect(Validator.validateUsername('user_name123')).toBe(false);
});

test('should validate correct username with only letters', () => {
  expect(Validator.validateUsername('Username')).toBe(true);
});

test('should validate correct username with letters, digits, and underscores in the middle', () => {
  expect(Validator.validateUsername('user123_name')).toBe(true);
});

test('should not validate username with more than 3 digits in a row', () => {
  expect(Validator.validateUsername('user1234name')).toBe(false);
});

test('should not validate username with more than 3 digits at the start', () => {
  expect(Validator.validateUsername('1234username')).toBe(false);
});

test('should not validate username starting with a digit', () => {
  expect(Validator.validateUsername('1username')).toBe(false);
});

test('should not validate username starting with a hyphen', () => {
  expect(Validator.validateUsername('-username')).toBe(false);
});

test('should not validate username starting with an underscore', () => {
  expect(Validator.validateUsername('_username')).toBe(false);
});

test('should not validate username ending with a digit', () => {
  expect(Validator.validateUsername('username1')).toBe(false);
});

test('should not validate username ending with a hyphen', () => {
  expect(Validator.validateUsername('username-')).toBe(false);
});

test('should not validate username ending with an underscore', () => {
  expect(Validator.validateUsername('username_')).toBe(false);
});

test('should not validate username with special character "@"', () => {
  expect(Validator.validateUsername('user@name')).toBe(false);
});

test('should not validate username with special character "!"', () => {
  expect(Validator.validateUsername('user!name')).toBe(false);
});

test('should not validate username with special character "#"', () => {
  expect(Validator.validateUsername('user#name')).toBe(false);
});
