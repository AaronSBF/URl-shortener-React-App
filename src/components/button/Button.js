import buttonCSS from "./button.css";

const Button = (props) => {
  return (
    <button
      className={`${buttonCSS.button} ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
