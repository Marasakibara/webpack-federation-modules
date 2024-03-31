import { Shop } from '@/pages/shop';
import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/components/app';
import { Suspense } from 'react';

const routes = [
  {
    path: '/shop',
    element: <App />,
    children: [
      {
        path: '/shop/main',
        element: (
          <Suspense fallback={'...loading'}>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: '/shop/second',
        element: (
          <Suspense fallback={'...loading'}>
            <div>second</div>
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
export default routes;
