import { Link, Outlet } from 'react-router-dom';
import { shopRouter } from '@packages/shared/src/routes/shop';
export const App = () => {
  return (
    <div>
      <h1>SHOP PAGSSE</h1>
      <Link to={shopRouter.second}>TO SECOND</Link>
      <Outlet />
    </div>
  );
};
