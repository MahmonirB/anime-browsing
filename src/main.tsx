import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { client } from '../apollo';
import Landing from './pages/Landing';
import './index.css';
import Media from './containers/media/Media';
import SignIn from './containers/auth/SignIn';
import { RecoilRoot } from 'recoil';
import Profile from './containers/profile/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/media',
    element: <Media />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </RecoilRoot>
  </React.StrictMode>
);
