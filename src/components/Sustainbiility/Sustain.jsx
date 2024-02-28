import React from 'react'
import Mission from './Subcompo/Mission'
import Goal from './Subcompo/Goal'
import About from './Subcompo/About'
import BgVideo from './Subcompo/BgVideo'
import Hero from './Subcompo/Hero'
// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
const Sustain = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Sustain"));
  scrollTop();
  return (
    <div>
      <Hero/>
        <Mission/>
        <Goal/>
        <About/>
        <BgVideo/>
    </div>
  )
}

export default Sustain