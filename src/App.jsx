import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
  SinglePageError,
} from './pages';

import { loader as landingLoader } from './pages/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        // errorElement: <h2>something went wrong..</h2>,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: 'cocktail',
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
      },
      {
        path: 'about',
        element: <About />,
        // children: [
        //   {
        //     // path: 'company',
        //     index: true,
        //     element: <h2>our company</h2>,
        //   },
        //   {
        //     path: 'person',
        //     element: <h2>John doe</h2>,
        //   },
        // ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
