import { App } from '@/components/app';
import { createBrowserRouter } from 'react-router-dom';
// @ts-ignore
import shopRouters from 'shop/Router';
// @ts-ignore
import adminRouters from 'admin/Router';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [...shopRouters, ...adminRouters],
  },
]);
