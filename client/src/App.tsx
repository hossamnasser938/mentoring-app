
import './App.css';

import { createHashRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home/Home';

function App() {


  const route = createHashRouter([
    { path: '/', element: <Home /> },
    { path: 'landing', element: <Home /> },
  ]);

  return (
    <div>
    

      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
