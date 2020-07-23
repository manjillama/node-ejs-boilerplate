import axios from 'axios';

export default async function fetchUsers() {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data;
}
