import PhoneBookView from './Views/PhoneBookView';

const routes = [
  {
    path: '/',
    label: 'contacts',
    exact: true,
    component: PhoneBookView,
  },
];

export default routes;
