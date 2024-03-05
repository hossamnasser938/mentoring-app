import './App.css';

import { Provider } from 'react-redux';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import OneProjectIdea from './component/projectIdea/OneProjectIdea';
import Home from './pages/Home';
import MentorPage from './pages/MentorPage';
import ProjectIdeasPage from './pages/ProjectIdeasPage';
import store from './state/setupStore';
import Profile from './views/MentorProfile';

function App() {



  const route = createHashRouter([
    { path: '/', element: <Home /> },
    { path: 'home', element: <Home /> },
    { path: 'profile/:id', element: <Profile /> },
    { path: 'projectideas', element: <ProjectIdeasPage /> },
    { path: 'mentors', element: <MentorPage /> },
    { path: 'projectideas/:idea', element: <OneProjectIdea /> },
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
