import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isPageLoading = navigation.state === 'loading';
  const value = 'some value';
  return (
    <>
      <Navbar />
      <section className="page">
        {isPageLoading ? (
          <div className="loading" />
        ) : (
          <Outlet context={{ value }} />
        )}
        {/* <Outlet /> */}
      </section>
    </>
  );
};
export default HomeLayout;
