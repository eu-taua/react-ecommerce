import { memo } from "react";

import { Top } from "./Top";
import { Bottom } from "./Bottom";
import "./styles.scss";

const FooterComponent = () => {
  return (
    <footer>
      <Top />
      <Bottom />
    </footer>
  );
};

export const Footer = memo(FooterComponent);
