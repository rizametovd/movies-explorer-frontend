import { Route, Redirect } from 'react-router-dom';
import { MAIN_PAGE } from '../../utils/constants';

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>{() => (props.loggedIn ? <Component {...props} /> : <Redirect to={MAIN_PAGE} />)}</Route>
  );
};

export default ProtectedRoute;
