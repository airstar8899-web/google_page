import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button
        className="button"
        style={{
          color: `${props.color}`,
          backgroundColor: `${props.btnColor}`,
        }}
      >
        <img src={props.icon} alt="" />
        {props.name}
        {""}
      </button>
    </div>
  );
};

export default Button;
