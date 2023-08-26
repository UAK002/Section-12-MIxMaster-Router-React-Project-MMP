import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import About from './pages/About';

import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <h2>home page</h2>,
    element: <HomeLayout />,
  },
  {
    path: '/about',
    // element: (
    //   <div>
    //     <h2>about page</h2>,
    //   </div>
    // ),
    element: <About />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
