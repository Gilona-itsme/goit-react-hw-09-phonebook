import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCurrentUser } from '../redux/auth/authOperations';
import routes from '../routes';
import Container from './UI/Container';
import AppBar from './AppBar';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Loader from './Loader';

const HomeView = lazy(() =>
  import('../Views/HomeView' /* webpackChunkName: "home-view" */),
);
const LoginView = lazy(() =>
  import('../Views/LoginView' /* webpackChunkName: "login-view" */),
);
const RegisterView = lazy(() =>
  import('../Views/RegisterView' /* webpackChunkName: "register-view" */),
);
const PhoneBookView = lazy(() =>
  import('../Views/PhoneBookView' /* webpackChunkName: "Phone-book-view" */),
);
const NotFoundView = lazy(() =>
  import('../Views/NotFoundView' /* webpackChunkName: "not-found-view" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute path={routes.MAIN} exact>
            <HomeView />
          </PublicRoute>
          <PublicRoute
            path={routes.REGISTRATION}
            redirectTo={routes.MAIN}
            restricted
          >
            <RegisterView />
          </PublicRoute>
          <PublicRoute
            path={routes.LOGIN}
            redirectTo={routes.CONTACTS}
            restricted
          >
            <LoginView />
          </PublicRoute>
          <PrivateRoute path={routes.CONTACTS} redirectTo={routes.LOGIN}>
            <PhoneBookView />
          </PrivateRoute>
          <PublicRoute>
            <NotFoundView />
          </PublicRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}
// class App extends Component {
//   componentDidMount() {
//     this.props.onGetCurretnUser();
//   }
//   render() {
//     return (
//       <Container>
//         <AppBar />

//         <Suspense fallback={<Loader />}>
//           <Switch>
//             <PublicRoute path={routes.MAIN} exact component={HomeView} />
//             <PublicRoute
//               path={routes.REGISTRATION}
//               component={RegisterView}
//               redirectTo={routes.MAIN}
//               restricted
//             />

//             <PublicRoute
//               path={routes.LOGIN}
//               component={LoginView}
//               redirectTo={routes.CONTACTS}
//               restricted
//             />
//             <PrivateRoute
//               path={routes.CONTACTS}
//               component={PhoneBookView}
//               redirectTo={routes.LOGIN}
//             />
//             <PublicRoute component={NotFoundView} />
//           </Switch>
//         </Suspense>
//       </Container>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onGetCurrentUser: getCurrentUser,
// };

//export default connect(null, mapDispatchToProps)(App);
