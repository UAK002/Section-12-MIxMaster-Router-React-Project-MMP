import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      {/* <Link to="/">Home Page</Link> */}
      {/* <a href="https://johnsmilga.com/">best web dev courses</a> */}
      <Outlet />
    </div>
  );
};
export default About;
