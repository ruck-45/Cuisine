// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Local Files
import NavBar from "./globalSubComponents/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./globalSubComponents/Footer";
import ScrollToTop from "./globalSubComponents/ScrollToTop";
import { RootState } from "./store/store";
import HomeHero from "./globalAssets/HomeHero.jpg";
import AboutHero from "./globalAssets/About.jpg";
import ContactHero from "./globalAssets/Contact.jpg";
import PricingHero from "./globalAssets/Prices.jpg";
import ServiceHero from "./globalAssets/Services.jpg";
import PrivacyHero from "./globalAssets/privacy.jpg";
import Recipes from "./components/Recipes/Recipes";
import Products from "./components/Products/Products";
import Story from "./components/Story/Story";
import Sustain from "./components/Sustainbiility/Sustain";
import Landing from "./components/Landing/Landing";
import Robinhood from "./components/Robinhood/Robinhood";

function App() {
  const curTab = useSelector((state: RootState) => state.curTab.value);

  let className = "";
  let background = "linear-gradient(rgba(0,0,0,0.3) 20%,rgba(0,0,0,0.2))";

  switch (curTab) {
    case "Home":
      className = "bg-no-repeat bg-top lg:bg-right-top bg-cover";
      background += `,url(${HomeHero})`;
      break;

    case "About":
      className = "bg-no-repeat bg-top";
      background += `,url(${AboutHero})`;
      break;

    case "Contact":
      className = "bg-no-repeat bg-top";
      background += `,url(${ContactHero})`;
      break;

    case "Pricing":
      className = "bg-no-repeat bg-top";
      background += `,url(${PricingHero})`;
      break;

    case "Services":
      className = "bg-no-repeat bg-top";
      background += `,url(${ServiceHero})`;
      break;

    case "Privacy":
      className = "bg-no-repeat bg-top";
      background += `,url(${PrivacyHero})`;
      break;

    case "Profile":
      className = "bg-no-repeat bg-top";
      background += `,url(${ServiceHero})`;
      break;
    default:
      break;
  }
  return (
    <>
      <div style={{ backgroundImage: background }} className={className}>
        {curTab === "Auth" || curTab === "Password Reset" || curTab === "Robinhood" ? null : <NavBar />}
        <Routes>
          {/* <Route path="/Home" element={<Robinhood />} />
          <Route path="/" element={<Robinhood />} /> */}
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/OurStory" element={<Story />} />
          <Route path="/Sustain" element={<Sustain />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<Navigate to="/Home" />} />
        </Routes>
      </div>
      {curTab === "Auth" || curTab === "Password Reset" || curTab === "Robinhood" ? null : <Footer />}
      {curTab === "Auth" || curTab === "Password Reset" || curTab === "Robinhood" ? null : <ScrollToTop />}
    </>
  );
}

export default App;
