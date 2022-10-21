import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import ConferenceInfo from './Components/Pages/Conference-info/ConferenceInfo';

function App() {
  const router = createBrowserRouter([
   {
    path: '/',
    element : <Layout></Layout>,
    children : [
      {
        path:'/conference',
        element : <ConferenceInfo></ConferenceInfo>
      }
    ]
   }
  ])
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
