import React from "react";
import { Desktop, Mobile, Tablet } from "../../responsive/responsive";
import HeaderMobile from "./HeaderMobile";
import HeaderTablet from "./HeaderTablet";
import HeaderDesktop from "./HeaderDesktop";

export default function Header() {
  return (
    <div>
      <Desktop>
        <HeaderDesktop />
      </Desktop>
      <Tablet>
        <HeaderTablet />
      </Tablet>
      <Mobile>
        <HeaderMobile />
      </Mobile>
    </div>
  );
}
