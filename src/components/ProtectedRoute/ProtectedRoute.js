import { Route, Redirect } from 'react-router-dom';
import { MAIN_PAGE } from '../../utils/constants';



const ProtectedRoute = ({ component: Component, ...props }) => {
  const token = localStorage.getItem('jwt');
  return (
    <Route>{() => (token ? <Component {...props} /> : <Redirect to={MAIN_PAGE} />)}</Route>
  );
};

export default ProtectedRoute;
