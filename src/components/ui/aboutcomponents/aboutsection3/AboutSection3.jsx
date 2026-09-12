import "./AboutSection3.css";
import Button from "../../../reusable/buttons/Button";
import googleGLogo from "../../../../assets/google Logo.png";

const AboutSection3 = () => {
  return (
    <div className="sectionThreeContainer">
      <img className="sectionThreeIcon" src={googleGLogo} alt="Google logo" />
      <h2>Google around the globe</h2>
      <p>Learn about Google's work and impact around the world.</p>
      <Button name="Explore" />
    </div>
  );
};

export default AboutSection3;
