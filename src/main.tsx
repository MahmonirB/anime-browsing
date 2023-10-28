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
import Genres from './containers/genres/Genres';
import About from './containers/about/About';

export enum ROUTES {
  home = '/',
  media = '/media',
  signIn = '/signin',
  profile = '/profile',
  genre = '/genres',
  about = '/about',
}

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Landing />,
  },
  {
    path: ROUTES.media,
    element: <Media />,
  },
  {
    path: ROUTES.signIn,
    element: <SignIn />,
  },
  {
    path: ROUTES.profile,
    element: <Profile />,
  },
  {
    path: ROUTES.genre,
    element: <Genres />,
  },
  {
    path: ROUTES.about,
    element: <About />,
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
