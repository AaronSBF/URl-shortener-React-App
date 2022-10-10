import Hero from "../sections/Hero";
import Shorten from "../sections/ShortenSection";
import Stats from "../sections/Stats";
import Boost from "../sections/Boost";
import MainCSS from "./MainCSS.module.css";

const Main = () => {
  return (
    <main className={MainCSS.main}>
      <Hero />
      <Shorten />
      <Stats />
      <Boost />
    </main>
  );
};

export default Main;
