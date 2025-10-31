import { Navigate } from 'react-router-dom';
import useAuth from '../Hook/useAuth';

const PublicRoute = ({ children }) => {
  const currentUser = useAuth();

  if (currentUser === undefined) return <div>Loading...</div>;

  if (currentUser) return <Navigate to="/" />;

  return children;
};

export default PublicRoute;
