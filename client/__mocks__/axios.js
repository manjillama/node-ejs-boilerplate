/*
 * Mocking axios
 * Jest automatically looks at __mocks__ folder and 
    overrides the original axios with our mock axios
 */
export default {
  /**
   * Mocking axios get function
   * returns promise with data property resolved
   */
  get: jest.fn(() => Promise.resolve({ data: {} })),
};
