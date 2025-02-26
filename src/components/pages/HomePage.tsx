import MenuPage from './homeSection/AboutUs';
import InteriorPage from './homeSection/Interiror';
import ReversePage from './homeSection/ReversePage';
import Visit from './homeSection/Visit';
import Welcome from './homeSection/Welcome';

const HomePage = () => {
  return (
    <>
      <Welcome />
      <MenuPage />
      <ReversePage/>
      <InteriorPage/>
      <Visit />
    </>
  );
};

export default HomePage;
