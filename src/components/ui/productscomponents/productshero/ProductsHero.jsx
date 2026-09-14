import "./ProductsHero.css";

const ProductsHero = () => {
  return (
    <div className="productsHeroContainer">
      <div className="productsIconStrip">
        <div className="scrollTrack">
          <span className="iconBox">▶️</span>
          <span className="iconBox">✉️</span>
          <span className="iconBox">🌸</span>
          <span className="iconBox">🤖</span>
          <span className="iconBox">🌐</span>
          <span className="iconBox">G</span>
          <span className="iconBox">▶️</span>
          <span className="iconBox">✉️</span>
          <span className="iconBox">🌸</span>
          <span className="iconBox">🤖</span>
          <span className="iconBox">🌐</span>
          <span className="iconBox">G</span>
          <span className="iconBox">▶️</span>
          <span className="iconBox">✉️</span>
          <span className="iconBox">🌸</span>
          <span className="iconBox">🤖</span>
          <span className="iconBox">🌐</span>
          <span className="iconBox">G</span>
        </div>
      </div>

      <h1>
        Helpful products, built with you <br /> in mind
      </h1>

      <div className="quickLinksBar">
        <span>Search in new ways</span>
        <span>Chat with Gemini</span>
        <span>Try AI tools</span>
        <span>Explore more products</span>
      </div>

      <div className="productsHeroImage"></div>
    </div>
  );
};

export default ProductsHero;
