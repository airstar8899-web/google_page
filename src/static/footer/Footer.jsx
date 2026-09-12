import "./Footer.css";
import googleLogo from "../../assets/google-logo-footer.svg";

const Footer = () => {
  const columns = [
    {
      title: "Resources",
      links: [
        "Blog",
        "Careers",
        "Contact us",
        "Help Center",
        "Investor Relations",
        "Locations",
        "Press resources",
      ],
    },
    {
      title: "Outreach and initiatives",
      links: [
        "Accessibility",
        "Crisis Response",
        "Google.org",
        "Google for Health",
        "Grow with Google",
        "Learning",
        "Public Policy",
        "Sustainability",
      ],
    },
    {
      title: "Research and technology",
      links: [
        "Google AI",
        "Google Cloud",
        "Google DeepMind",
        "Google for Developers",
        "Google Labs",
        "Google Research",
      ],
    },
    {
      title: "More about us",
      links: [
        "Around the globe",
        "Human rights",
        "Safety Center",
        "Supplier responsibility",
        "Transparency Center",
        "Transparency Report",
      ],
    },
  ];

  return (
    <footer className="footerContainer">
      <div className="footerInner">
        <div className="footerColumns">
          {columns.map((col) => (
            <div className="footerColumn" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr />

        <div className="footerBottom">
          <img src={googleLogo} alt="Google" className="footerLogo" />
          <div className="footerBottomLinks">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
          <div className="footerBottomRight">
            <span>Help</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
