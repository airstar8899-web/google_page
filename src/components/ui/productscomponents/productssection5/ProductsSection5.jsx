import "./ProductsSection5.css";
import Button from "../../../reusable/buttons/Button";
import geminiLiveImg from "../../../../assets/slide_img.png";

const ProductsSection5 = () => {
  return (
    <div className="geminiLiveSection">
      <div className="geminiLiveText">
        <h2>Gemini Live</h2>
        <p>Have a conversation about anything around you or on your screen.</p>
        <Button name="Talk it out" />
      </div>

      <div className="geminiLivePhone">
        <img src={geminiLiveImg} alt="Gemini Live" />
      </div>
    </div>
  );
};

export default ProductsSection5;