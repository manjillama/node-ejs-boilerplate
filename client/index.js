import 'babel-polyfill'; // regeneratorRuntime is not defined
import fetchUsers from './services/fetchUsers';
import './css/main.scss';

(async function renderUsers() {
  console.log('🦖', await fetchUsers());
})();
