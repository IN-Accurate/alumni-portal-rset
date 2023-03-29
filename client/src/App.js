import './App.css';
import HomePage from './Routes/Home';
import LoginPage from './Routes/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <div>Something went wrong</div>,
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <div>Something went wrong</div>,
  },
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
