import React from 'react';
import Layout from './Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

/**
 * Route table consumed by vite-react-ssg. Each path is statically
 * pre-rendered at build time, then hydrated into the same SPA on the client.
 */
export const routes = [
  {
    path: '/',
    element: <Layout />,
    entry: 'src/Layout.jsx',
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
];

export default routes;
