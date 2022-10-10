import { useState, useRef, useEffect } from "react";
import Button from "../button/Button";
import shortenCSS from "./shortenCSS.module.css";
import LinkItem from "./LinkItem";

let countItems = 0; //variable to help with logic on number of links gotten

const Shorten = () => {
  const [shortenLinks, setShortenLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [linkErrorMessage, setLinkErrorMessage] = useState("");
  const inputRef = useRef(); //variable to hold reference to input element


  /*useEffect(() => {
    const localState = JSON.parse(localStorage.getItem("savedShortenedLinks"));
    if (countItems === 0 && localState !== null) {
      setShortenLinks(localState);
      countItems = localState.length;
    } else {
      localStorage.setItem(
        "savedShortenedLinks",
        JSON.stringify(shortenLinks)
      );
    }
  }, [shortenLinks]);
*/

  //function to get the links from API
  const getShortenLink = async (url) => {
    setIsLoading(true);
    //setLinkErrorMessage("Loading. Please wait...")
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );

      if (!response.ok) {
        throw new Error("Please add a valid link");
      }

      const data = await response.json();

      //created an object to hold the data from json
      const link = {
        id: countItems,
        fullLink: data.result.original_link,
        shortenLink: data.result.short_link
      };

      setShortenLinks((prev) => [...prev, link]);
      setIsLoading(false);
      ++countItems;
      setLinkErrorMessage("");
    } catch (error) {
      setLinkErrorMessage(error.message);
      inputRef.current.focus();
    }finally{ 
      setIsLoading(false);
    }
  };

  //click handler
  const linkEventHandler = (event) => {
    event.preventDefault();

    let enteredLink = inputRef.current.value.trim().toLowerCase();

    if (enteredLink.length === 0) {
      setLinkErrorMessage("Please type a link");
      inputRef.current.focus();
      return;
    }

    getShortenLink(enteredLink);
    inputRef.current.value = "";
  };

  return (
    <>
      <section className={shortenCSS.shorten}>
        <div className="container">
          <form action="" className={`${shortenCSS.shorten__form}`}>
            <input
              ref={inputRef}
              className={shortenCSS.shorten__search__input}
              placeholder="Shorten a link here..."
              type="text"
            />
            {linkErrorMessage.length !== 0 && (
              <p className={shortenCSS.shorten__search__error}>
                {linkErrorMessage}
              </p>
            )}
            <Button
              type="submit"
              className={shortenCSS.shorten__btn}
              onClick={linkEventHandler}
            >Shorten It!</Button>
          </form>
        </div>
      </section>

      {(shortenLinks.length !== 0 || isLoading) && (
        <section className={shortenCSS.result}>
          <div className="container center">
            <ul className={`row ${shortenCSS.result__list}`}>
              {isLoading && (
                <li
                  className={`row ${shortenCSS.result__list__items} ${shortenCSS.loader}`}
                >
                  <div className={shortenCSS.loader___dots}></div>
                </li>
              )}

              {shortenLinks
                .slice(0)
                .reverse()
                .map((link) => (
                  <LinkItem key={link.id} linkData={link} />
                ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Shorten;
