import HeroSection from "./HeroSection";
import FitnessTraining from "../fitnessTraining/FitnessTraining";
import Swiper from "./Swiper";
import QuickInfo from "./QuickInfo";
import ArticlesNews from "./ArticlesNews";
import Partners from "./Partners";
import Calculator from "./Calculator";

const Home = () => {
  return (
    <div className={` margin-sections `}>
      <HeroSection />
      <Swiper />
      <Partners />
      <FitnessTraining />
      <ArticlesNews />
      <Calculator />
      <QuickInfo />
    </div>
  );
};

export default Home;
