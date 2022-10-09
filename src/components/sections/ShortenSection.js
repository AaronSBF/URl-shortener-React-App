import { useState, useRef } from "react";
import Button from "../button/Button";

let countItems = 0;

const Shorten = () => {
  const [shortenLinks, setShortenLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [linkErrorMessage, setLinkErrorMessage] = useState("");
  const inputRef = useRef();

  const getShortenLink = async (url) => {
    setIsLoading(true);
    //setLinkErrorMessage("Loading. Please wait...")
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );

      if (response.ok) {
        throw new Error("Please add a valid link");
      }

      const data = await response.json();

      const link = {
        id: countItems,
        fullLink: data.result.original_link,
        shortenLink: data.result.short_link,
      };

      setShortenLinks((prev) => [...prev, link]);
      setIsLoading(false);
      countItems++;
      setLinkErrorMessage("");
    } catch (error) {
      setLinkErrorMessage(error.message);
      inputRef.current.focus();
    }
  };
};
