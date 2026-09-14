import "./ProductsSection1.css";
import card1 from "../../../../assets/img1.png";
import card2 from "../../../../assets/img2.webp";
import card3 from "../../../../assets/img3.png";
import card4 from "../../../../assets/img4.png";
import linkIcon from "../../../../assets/icon_img.svg"


const ProductsSection1 = () =>{
    const supportCards = [
        { title: "Product support", image: card1},
        { title: "Google Store", image: card2},
        { title: "Google Account", image: card3},
        { title: "Accessibility Support", image: card4},
    ];

    return(
        <div className="productsSectionContainer">
            <div className="supportCardsRow">
                {supportCards.map((card) => (
                    <div className="supportCard" key={card.title}>
                        <div className="supportCardText">
                            <h4>{card.title}</h4>
                            <img className="linkIcon" src={linkIcon} alt="" />
                            </div>
                            <img src={card.image} alt={card.title} />
                            </div>

            
                ))
                }
            </div>

        </div>

    );
};

export default ProductsSection1;