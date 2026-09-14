import "./ProductsSection3.css";
import linkIcon from "../../../../assets/icon_img.svg";
import circleImg from "../../../../assets/card1.webp";
import lensImg from "../../../../assets/card2.png";

const ProductsSection3 = () => {
  const leftColumn = [
    {
      color: "#e8eefc",
      image: circleImg,
      label: "CIRCLE TO SEARCH",
      text: "Circle, highlight or tap to search anything on your Android device.",
    },
    {
      color: "#fbe4e2",
      image: null,
      label: "AI MODE",
      text: "Ask anything and get an AI-powered response. Then, keep exploring with follow-up questions and web links.",
    },
  ];

  const rightColumn = [
    {
      color: "#e3f3e6",
      image: null,
      label: "HOW SEARCH WORKS",
      text: "Get the details on how Search works — from the approach we take, to the technology behind it.",
    },
    {
      color: "#fdf3d8",
      image: lensImg,
      label: "LENS",
      text: "Go beyond words: Search with your camera, an image or whatever's on your screen.",
    },
  ];

  const renderCard = (card) => (
    <div
      className="gridCard"
      key={card.label}
      style={{ backgroundColor: card.color }}
    >
      {card.image && (
        <div className="gridCardImage">
          <img src={card.image} alt={card.label} />
        </div>
      )}
      <p className="gridCardLabel">{card.label}</p>
      <p className="gridCardText">{card.text}</p>
      <img className="linkIcon" src={linkIcon} alt="" />
    </div>
  );

  return (
    <div className="productsSection3Grid">
      <div className="gridColumn">{leftColumn.map(renderCard)}</div>
      <div className="gridColumn">{rightColumn.map(renderCard)}</div>
    </div>
  );
};

export default ProductsSection3;
