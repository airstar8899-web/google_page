import "./Cards.css";
import arrowIcon from "../../../assets/icon_img.svg";

const Cards = ({ cardImage, cardText,}) => {
    return(
        <div className="cardContainer">
            <div className="imageContainer">
                <img src={cardImage} alt="" />
            </div>

            <div className="textRow">
                <p>{cardText}</p>
                <img className="icon" src={arrowIcon} alt="" />
            </div>

        </div>
    );
};

export default Cards;