import React from 'react';
import Layout from './Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

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
      // Explicit `404` route so the SSG emits dist/404.html (Vercel serves it for unknown paths);
      // the SSG skips `*` routes, so `*` only handles client-side navigation to a bad URL.
      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

export default routes;
