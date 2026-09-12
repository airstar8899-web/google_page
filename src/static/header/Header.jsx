import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerContainer">
      <section className="logo">
        <img src="./google-logo-about.svg" alt="logo" />
      </section>
      <section className="navigation">
        <Link to="/">
          <div>
            <nav>About</nav>
            <div className="rule" />
        </div>
        </Link>
      
       <Link to="/product">
       <nav>Product</nav>
       </Link>
        <Link to="/company">
        <nav>Company Info</nav>
        </Link>
        <nav>News</nav>
      </section>
      
    </div>
  );
};

export default Header;
