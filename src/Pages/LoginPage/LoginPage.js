import React from "react";
import { Desktop, Mobile, Tablet } from "../../responsive/responsive";
import LoginDesktop from "./LoginDesktop";
import LoginTablet from "./LoginTablet";
import LoginMobile from "./LoginMobile";

export default function LoginPage() {
  return (
    <div>
      <Desktop>
        <LoginDesktop />
      </Desktop>
      <Tablet>
        <LoginTablet />
      </Tablet>
      <Mobile>
        <LoginMobile />
      </Mobile>
    </div>
  );
}
