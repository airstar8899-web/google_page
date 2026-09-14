import "./ProductsSection4.css";
import Button from "../../../reusable/buttons/Button";

const ProductsSection4 = () => {
  return (
    <div className="GeminiSection">
      <img className="geminiLogo" src="/gemini_img.png" alt="Gemini" />
      <h2>
        Chat with Gemini, your personal AI <br /> assistant
      </h2>
      <Button name="Try it now" />
    </div>
  );
};

export default ProductsSection4;
