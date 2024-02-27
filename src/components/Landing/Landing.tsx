// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
import Subscribe from "./subComponents/Subscribe";
import Thanks from "./subComponents/Thanks";

const Landing = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Landing"));
  scrollTop();

  return (
    <>
      <Subscribe />
      <Thanks />
    </>
  );
};

export default Landing;
