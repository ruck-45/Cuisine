// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
import Subscribe from "./subComponents/Subscribe";

const Landing = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Landing"));
  scrollTop();
  
  return (
    <>
      <Subscribe/>
    </>
  );
};

export default Landing;
