import { Navigate } from 'react-router-dom';
import useAuth from '../Hook/useAuth';

const ProtectedRoute = ({ children }) => {
  const currentUser = useAuth();

  if (currentUser === undefined) return <div>Loading...</div>;

  if (!currentUser) return <Navigate to="/signup" />;

  return children;
};

export default ProtectedRoute;
