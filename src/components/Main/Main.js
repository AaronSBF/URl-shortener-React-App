import Hero from "../sections/Hero";
import Shorten from "../sections/ShortenSection";
import Stats from "../sections/Stats";
import Boost from "../sections/Boost";
import MainCSS from "./MainCSS";

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
