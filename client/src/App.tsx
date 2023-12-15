import './App.css';

import { createHashRouter, RouterProvider } from 'react-router-dom';

import OneProjectIdea from './component/projectIdea/OneProjectIdea';
import Home from './pages/Home/Home';

function App() {
  const route = createHashRouter([
    { path: '/', element: <Home /> },
    { path: 'landing', element: <Home /> },
  ]);

  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={route}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
