// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
import FeaturedRecepie from "./subComponents/FeaturedRecepie";
import FeaturedService from "./subComponents/FeaturedService";
import Unleash from "./subComponents/Unleash";
import Hero from "./subComponents/Hero";

const Landing = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Landing"));
  scrollTop();

  return (
    <div>
      <Hero/>
      <FeaturedRecepie />
      <FeaturedService />
      <Unleash/>
    </div>
  );
};

export default Landing;
