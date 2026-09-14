import "./ProductsSection6.css";
import androidImg from "../../../../assets/phone1.png";
import pixelImg from "../../../../assets/phone2.webp";

const ProductsSection6 = () => {
  const cards = [
    {
      image: androidImg,
      title: "All things Android",
      text: "Check out a whole world of devices that work better together, plus AI features to help throughout your day.",
      link: "See what's new",
    },
    {
      image: pixelImg,
      title: "Our Pixel portfolio",
      text: "See the latest Pixel lineup — from phones and watches, to earbuds and tablets.",
      link: "Shop now",
    },
  ];

  return (
    <div className="section6Container">
      <h2>Get more done with Android and Pixel</h2>
      <div className="section6Row">
        {cards.map((card) => (
          <div className="section6Card" key={card.title}>
            <img src={card.image} alt={card.title} />
            <div className="section6Text">
              <h4>{card.title}</h4>
              <p>{card.text}</p>
              <span className="section6Link">{card.link}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection6;
