import React from "react";
import { Link } from "react-scroll";

interface Props {
  link_text: string;
  link: string;
}
const LinkElement = ({ link_text, link }: Props) => {
  return (
    <Link
      activeClass="active"
      to={link}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
    >
      {link_text}
    </Link>
  );
};

export default LinkElement;
