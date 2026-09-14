import "./AboutSection2.css";
import Button from "../../../reusable/buttons/Button";

const AboutSection2 = () => {
  return (
    <div className="sectionTwoContainer">
      <div className="sectionTwoText">
        <h2>
          Gemini app is now <br />
          available for Windows
        </h2>
        <p>
          Get help from AI with a simple keyboard shortcut, directly from your
          desktop.
        </p>
        <Button name="Check it out" />
      </div>

      <div className="sectionTwoImage">
        <video src="/gemini-desktop.mp4" autoPlay loop muted playsInline />
      </div>
    </div>
  );
};

export default AboutSection2;
