// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
import FeaturedRecepie from "./subComponents/FeaturedRecepie";
import FeaturedService from "./subComponents/FeaturedService";

const Landing = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Landing"));
  scrollTop();

  return (
    <div>
      <FeaturedRecepie />
      <FeaturedService />
    </div>
  );
};

export default Landing;
