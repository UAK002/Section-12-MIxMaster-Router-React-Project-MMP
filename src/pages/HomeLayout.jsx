import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
  return (
    // <div>
    //   <nav>navbar</nav>
    //   <Outlet />
    // </div>
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default HomeLayout;
