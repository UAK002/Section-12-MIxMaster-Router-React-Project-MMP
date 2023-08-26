// import { Link } from 'react-router-dom';

import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      <nav>navbar</nav>
      {/* <h1>HomeLayout</h1> */}
      {/* <Link to="/about">About Page</Link> */}
      <Outlet />
    </div>
  );
};
export default HomeLayout;
