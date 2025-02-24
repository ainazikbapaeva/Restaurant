import MenuPage from './homeSection/AboutUs';
import ReversePage from './homeSection/ReversePage';
import Visit from './homeSection/Visit';
import Welcome from './homeSection/Welcome';

const HomePage = () => {
  return (
    <>
      <Welcome />
      <MenuPage />
      <ReversePage/>
      <Visit />
    </>
  );
};

export default HomePage;
