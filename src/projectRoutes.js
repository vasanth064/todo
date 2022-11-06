import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import AddTodo from './Components/AddTodo';
import DisplayTodo from './Components/DisplayTodo';
import Login from './Components/Login';

const projectRoutes = [
  {
    path: '/',
    private: true,
    element: <DisplayTodo />,
  },
  {
    path: '/add',
    private: true,
    element: <AddTodo />,
  },
  {
    path: '/update/:uid',
    private: true,
    element: <AddTodo />,
  },
  {
    path: '/view',
    private: true,
    element: <Navigate to='/' replace />,
  },
  {
    path: '/login',
    private: false,
    element: <Login />,
  },
  {
    path: '*',
    private: false,
    element: (
      <article>
        <h1>Page Not Found</h1>
        <Link to='/login'>Take Back</Link>
      </article>
    ),
  },
];

export default projectRoutes;
