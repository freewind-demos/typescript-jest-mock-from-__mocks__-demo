import User from './User';
import lodash from 'lodash';

// 'jest.mock' is not required to calling for a npm module
// jest.mock('lodash');

// https://jestjs.io/docs/en/manual-mocks#mocking-user-modules
// calling 'jest.mock' is required
jest.mock('./User');

describe('test', () => {
  it('mocked User.hello', () => {
    const user = new User();
    expect(user.hello()).toBe('Hello mockedUser!');
  })

  it('mocked lodash', () => {
    const value = lodash.get({aaa: 111}, 'aaa')
    expect(value).toBe('lodash-get mocks');
  })
})
