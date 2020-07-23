import mockAxios from 'axios';
import fetchUsers from '../fetchUsers';

it('Calls axios and fetches users', async () => {
  // setup
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: [{ name: 'Ironman' }, { name: 'Batman' }],
    })
  );
  const response = await fetchUsers();
  expect(response).toEqual([{ name: 'Ironman' }, { name: 'Batman' }]);
  // Because we called the axios.get once above
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  // Arguments that axios.get function was called with
  expect(mockAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
});
