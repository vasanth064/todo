import React from 'react';
import { Link } from 'react-router-dom';
import { useGoogleAuth } from '../Contexts/GoogleAuthContext';

const Dashboard = ({ children }) => {
  const { googleSignOut } = useGoogleAuth();
  return (
    <div>
      <nav className='container-fluid'>
        <ul>
          <li>
            <Link className='contrast' to='/'>
              <strong>Todo.</strong>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='/login' onClick={() => googleSignOut()}>
              Sign Out
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Dashboard;
