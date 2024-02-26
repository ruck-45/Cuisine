import React from "react";
import Intro from "./Subcompo/Intro";
import Cards from "./Subcompo/Cards";
import Ending from "./Subcompo/Ending";
// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
import Chef from "./Subcompo/Chef";

const content1 = {
  title: "Rooted in chef culture, from the back of house to your kitchen",
  des: "Sea Cuisine’s heritage was born from the expertise and skills of chefs. Our seafood recipes were originally created by chefs for chefs to serve in restaurants. Now you can bring these recipes into your kitchen and use them as inspiration to your own culinary creativity.",
};
const content2 = {
  title: "Recipes you crave",
  des: "Thanks to our chefs’ extensive recipe development, our seafood is exquisitely flavored and masterfully seasoned. Each recipe uses complementary ingredients that create great depths of flavor while letting the seafood shine. So, no matter what you’re craving — some sweet Bourbon salmon or garlic and herb tilapia, perhaps? — you can expect restaurant-worthy results every time",
};

const Story = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("OurStory"));
  scrollTop();
  return (
    <div>
      <Intro title={content1.title} des={content1.des} />
      <Chef />
      <Cards />
      <Intro title={content2.title} des={content2.des} />
      {/* <About/> */}
      <Ending />
    </div>
  );
};

export default Story;
