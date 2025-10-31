import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(undefined); // undefined = loading

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user || null); // user object or null if logged out
    });

    return () => unsubscribe();
  }, []);

  return currentUser;
};

export default useAuth;
