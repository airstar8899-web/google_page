import Cards from "../../../reusable/cards/Cards";
import "./AboutSection1.css";
import myCardImage1 from "../../../../assets/sct 2(first).webp";
import myCardImage2 from "../../../../assets/sct 2 (second).webp";
import myCardImage3 from "../../../../assets/sct 2 (third).png";

const AboutSection1 = () => {
  return (
    <div className="sectionOneContainer">
      <Cards
        cardImage={myCardImage1}
        cardText="Explore our products and features 
            across Search, Google Workspace, and more"
      />

      <Cards
        cardImage={myCardImage2}
        cardText="Learn all about our leading
             AI models — and discover their capabilities"
      />

      <Cards
        cardImage={myCardImage3}
        cardText="See how we’re tackling some of the most 
            challenging problems in computer science"
      />
    </div>
  );
};

export default AboutSection1;
