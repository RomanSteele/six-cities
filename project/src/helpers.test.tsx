
import {  validateEmail, validatePassword, isAuthStatusUnknown } from './helpers';
import { fakeAuthStatus, fakeEmail, fakePassword } from './utils/mocks';



const mockEmail = fakeEmail;
const mockPassword = fakePassword;
const mockAuthStatus = fakeAuthStatus;


describe('Function: validateEmail', () => {
  it('should return true if email is validated', () => {
    const email = mockEmail;
    expect(validateEmail(email[0])).toBe(true);
  });
  it('should return false if email is not validated', () => {
    const email = mockEmail;
    expect(validateEmail(email[1])).toBe(false);
  });
});

describe('Function: validatePassword', () => {
  const password = mockPassword;

  it('should return true if password is validated', () => {
    expect(validatePassword(password[0])).toBe(true);
  });

  it('should return false if password is not validated', () => {
    expect(validatePassword(password[1])).toBe(false);
  });
});

describe('Function: isAuthStatusUnknown', () => {
  const authStatus = mockAuthStatus;

  it('should return true if authorizationStatus is unknown', () => {
    expect(isAuthStatusUnknown(authStatus[0])).toBe(true);
  });

  it('should return false if authorizationStatus is auth or notauth', () => {
    expect(isAuthStatusUnknown(authStatus[1])).toBe(false);
    expect(isAuthStatusUnknown(authStatus[2])).toBe(false);
  });
});
