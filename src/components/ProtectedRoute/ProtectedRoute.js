import { Route, Redirect } from 'react-router-dom';
import { MAIN_PAGE } from '../../utils/constants';



const ProtectedRoute = ({ component: Component, ...props }) => {
  const userId = localStorage.getItem('userId');
  return (
    <Route>{() => (userId ? <Component {...props} /> : <Redirect to={MAIN_PAGE} />)}</Route>
  );
};

export default ProtectedRoute;
