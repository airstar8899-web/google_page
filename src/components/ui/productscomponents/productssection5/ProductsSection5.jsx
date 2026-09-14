import "./ProductsSection5.css";
import Button from "../../../reusable/buttons/Button";
import geminiLiveVideo from "../../../../assets/gemini-live.mp4";

const ProductsSection5 = () => {
  return (
    <div className="geminiLiveSection">
      <div className="geminiLiveText">
        <h2>Gemini Live</h2>
        <p>Have a conversation about anything around you or on your screen.</p>
        <Button name="Talk it out" />
      </div>

      <div className="geminiLivePhone">
        <video src={geminiLiveVideo} autoPlay loop muted playsInline />
      </div>
    </div>
  );
};

export default ProductsSection5;
