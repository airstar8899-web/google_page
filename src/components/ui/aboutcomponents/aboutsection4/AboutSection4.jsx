import "./AboutSection4.css";
import Button from "../../../reusable/buttons/Button";

const AboutSection4 = () => {
  return (
    <div className="sectionFourCard">
      <div className="sectionFourText">
        <h2>Get the latest news from Google in your inbox</h2>
        <p>
          Sign up to receive top stories from the week — from product
          announcements, to everyday tips.
        </p>
      </div>
      <Button name="Subscribe" 
      color="#0b57d0"
      btnColor="#d3e3fd"
      />
    </div>
  );
};

export default AboutSection4;
