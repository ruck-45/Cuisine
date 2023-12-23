// Dependencies
import ServiceImage from "./ServiceImage";

// Local Files
import socialMedia from "../assets/socialMedia.png";
import seo from "../assets/seo.png";
import webDev from "../assets/webDev.jpg";
import graphic from "../assets/graphic.jpg";
import analytics from "../assets/analytics.png";

const Services = () => {
  let miniWidth = 400;

  if (window.innerWidth <= 768) {
    miniWidth = 800;
  }

  return (
    <div className="flex flex-col md:flex-row bg-white">
      <ServiceImage className="smm" textSize="3rem" width={800} image={socialMedia} />
      <div className="grow grid grid-cols-1 md:grid-cols-2">
        <ServiceImage className="seo" textSize="2rem" width={miniWidth} image={seo} />
        <ServiceImage className="web" textSize="2rem" width={miniWidth} image={webDev} />
        <ServiceImage className="graph" textSize="2rem" width={miniWidth} image={graphic} />
        <ServiceImage className="analytics" textSize="2rem" width={miniWidth} image={analytics} />
      </div>
    </div>
  );
};

export default Services;
