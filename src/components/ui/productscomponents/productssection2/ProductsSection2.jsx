import "./ProductsSection2.css";
import Button from "../../../reusable/buttons/Button";
import googleGLogo from "../../../../assets/google Logo.png";

const ProductsSection2 = () => {
  return (
    <div className="searchNewWays">
      <img className="gLogo" src={googleGLogo} alt="Google" />
      <h2>Search in new ways</h2>
      <Button name="Download the Google app" />
    </div>
  );
};

export default ProductsSection2;
