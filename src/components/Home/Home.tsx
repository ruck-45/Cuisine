// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
import Hero from "./subComponents/Hero";
import Meal from "./subComponents/Meal";
import PerfectMeal from "./subComponents/PerfectMeal";
import OurStory from "./subComponents/OurStory";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));
  scrollTop();

  return (
    <>
      <Hero />
      <Meal />
      <PerfectMeal />
      <OurStory />
    </>
  );
};

export default Home;
