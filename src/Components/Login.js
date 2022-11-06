import React from 'react';
import { Navigate } from 'react-router';
import { useGoogleAuth } from '../Contexts/GoogleAuthContext';

const Login = () => {
  const { googleSignIn, currentUser } = useGoogleAuth();

  return currentUser ? (
    <Navigate to='/' />
  ) : (
    <main className='container'>
      <article>
        <button onClick={() => googleSignIn()}>Login With Google</button>
      </article>
    </main>
  );
};

export default Login;
