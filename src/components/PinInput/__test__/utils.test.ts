import { regexValidate } from '../utils';

describe('regexValidate', () => {
  it('4 with pattern [0-9] should be true', () => {
    expect(regexValidate("[0-9]", "4")).toBeTruthy()
  });

  it('9 with pattern [0-6] should be false', () => {
    expect(regexValidate("[0-6]", "9")).toBeFalsy()
  });

  it('should be true with number', () => {
    expect(regexValidate("\\d+", "1234")).toBeTruthy()
  });
  it('should be true with number and character', () => {
    expect(regexValidate(".+", "1234abc")).toBeTruthy()
  });
  it('number with length of 4', () => {
    expect(regexValidate("\\d{4}", "1234")).toBeTruthy()
  });
})
