import Button from "../button/Button";
import heroStyle from "./heroCSS.module.css";

const Hero = () => {
  return (
    <section className={heroStyle.hero}>
      <div className="container row">
        <div className={heroStyle.hero__img}></div>

        <div className={heroStyle.hero__text}>
          <h1 className={heroStyle.her__title}>More than just shorter links</h1>
          <p className={heroStyle.hero__desc}>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button className={heroStyle.hero__btn}>Get started</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
