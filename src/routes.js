import PhoneBook from './Views/PhoneBook';

const routes = [
  {
    path: '/',
    label: 'contacts',
    exact: true,
    component: PhoneBook,
  },
];

export default routes;
