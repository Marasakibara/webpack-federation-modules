import { Link, Outlet } from 'react-router-dom';
import { shopRouter } from '@packages/shared/src/routes/shop';
import { adminRouter } from '@packages/shared/src/routes/admin';
export const App = () => {
  return (
    <div data-testid={'App'}>
      <h1>Page</h1>
      <Link to={adminRouter.about}>ABOUT</Link>
      <br />
      <Link to={shopRouter.main}>SHOP</Link>
      <Outlet />
    </div>
  );
};
