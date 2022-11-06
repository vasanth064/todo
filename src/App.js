import { Route, Routes } from 'react-router';
import Dashboard from './Components/Dashboard';
import { PrivateRoute } from './Components/PrivateRoute';
import GoogleAuthenticationProvider from './Contexts/GoogleAuthContext';
import projectRoutes from './projectRoutes';

function App() {
  return (
    <div>
      <GoogleAuthenticationProvider>
        <Routes>
          {projectRoutes.map((item, index) =>
            item.private ? (
              <Route
                key={index}
                path={item.path}
                element={
                  <PrivateRoute>
                    <Dashboard>{item.element}</Dashboard>
                  </PrivateRoute>
                }
              />
            ) : (
              <Route key={index} path={item.path} element={item.element} />
            )
          )}
        </Routes>
      </GoogleAuthenticationProvider>
    </div>
  );
}

export default App;
