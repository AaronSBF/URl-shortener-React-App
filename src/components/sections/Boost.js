import Button from "../button/Button";
import boostStyles from "./boostCSS.css";

const Boost = () => {
  return (
    <section className={boostStyles.boost}>
      <div className="container center">
        <h2 className={boostStyles.boost__title}>Boost your links tooday</h2>
        <Button className={boostStyles.boost__btn}>Get Started</Button>
      </div>
    </section>
  );
};

export default Boost;