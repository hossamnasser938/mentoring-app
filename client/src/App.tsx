import './App.css';

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { Provider } from 'react-redux';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home/Home';
import { apiSlice } from './state/apiSlice';
import Profile from './views/Profile';

function App() {

  const store = configureStore({
    reducer: { [apiSlice.reducerPath]: apiSlice.reducer },
    middleware: (getDefault) => getDefault().concat(apiSlice.middleware)
  })

  setupListeners(store.dispatch)


  const route = createHashRouter([
    { path: '/', element: <Home /> },
    { path: 'home', element: <Home /> },
    { path: 'profile/:id', element: <Profile /> },
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
