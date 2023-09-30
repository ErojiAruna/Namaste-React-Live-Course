import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Error from './components/Error';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';
import userContext from '../utils/userContext';

const Instamart = lazy(() => import('./components/Instamart'));
// Upon On Demand Loading --> Upon render -> suspend loading
const About = lazy(() => import('./components/About'));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: 'Tasty Delights',
    email: 'support@tastydelights.com',
  });

  return (
    <userContext.Provider
      value={{
        user: user,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </userContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: (
          <Body
            user={{
              name: 'Tasty Delights',
              email: 'support@tastydelights.com',
            }}
          />
        ),
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: '/instamart',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

// passing a react element inside the root
root.render(<RouterProvider router={appRouter} />);
