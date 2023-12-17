import './App.css';

import { Provider } from 'react-redux';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home/Home';
import store from './state/setupStore';
import Profile from './views/Profile';
import ProjectIdeasPage from './views/ProjectIdeasPage';

function App() {



  const route = createHashRouter([
    { path: '/', element: <Home /> },
    { path: 'home', element: <Home /> },
    { path: 'profile/:id', element: <Profile /> },
    { path: 'projectideas', element: <ProjectIdeasPage/> },
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
