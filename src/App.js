import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import ConferenceInfo from './Components/Pages/Conference-info/ConferenceInfo';
import Home from './Components/Pages/Home/Home';

function App() {
  const router = createBrowserRouter([
   {
    path: '/',
    element : <Layout></Layout>,
    children : [
      {
        path:'/',
        element : <Home></Home>
      },
      {
        path:'/topics',
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
