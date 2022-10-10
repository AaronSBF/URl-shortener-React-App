import { useState } from "react";
import shortenCSS from "./shortenCSS.css";
import Button from "../button/Button";
//functional components to handle the copy funcitonality

const linkItem = (props) => {
  const [copied, setCopied] = useState(false);

  let link = props.linData;

  const copyHandler = (selectedLink, linkID) => {
    navigator.clipboard
      .writeText(selectedLink)
      .then(() => {
        setCopied(true);
      })
      .catch(() => {
        console.log("Error. Cannot copy to clipboard");
      });
  };

  return (
    <li className={`row ${shortenCSS.result__list__items}`}>
      <span className={shorten.link__url} title={link.fullLink}>
        {link.fullLink}
      </span>
      <span className={shortenCSS.link__shorten}>{link.shortenLink}</span>

      <Button
        className={`${shortenCSS.link__btn} ${
          copied && shortenCSS.link__btn__copied
        }`}
        onClick={() => copyHandler(link.shortenLink, link.id)}
      >
        {copied ? "Copied!" : "Copy"}
      </Button>
    </li>
  );
};

export default linkItem;