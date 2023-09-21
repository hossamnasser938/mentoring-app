
import './App.css';

import { createHashRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home/Home';

function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("/mentors")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setMessage(res.message);
  //     });
  // }, []);

  const route = createHashRouter([
    { path: '/', element: <Home /> },
    { path: 'landing', element: <Home /> },
  ]);

  return (
    <div>
      {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message ? "message = " + message : "Extra Loading ..."}</p>
      </header>
    </div> */}

      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
