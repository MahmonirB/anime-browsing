import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { client } from '../apollo';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
)
