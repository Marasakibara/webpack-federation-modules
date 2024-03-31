import { App } from '@/components/app';
import { createBrowserRouter } from 'react-router-dom';
import { LazyAbout } from '@/pages/about/About.lazy';
import { Suspense } from 'react';

const routes = [
  {
    path: '/admin',
    element: <App />,
    children: [
      {
        path: 'admin/about',
        element: (
          <Suspense fallback={'...loading'}>
            <LazyAbout />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
export default routes;
