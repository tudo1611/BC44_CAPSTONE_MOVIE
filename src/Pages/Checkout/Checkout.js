import React from "react";
import { Desktop, Tablet, Mobile } from "../../responsive/responsive";
import CheckoutDesktop from "./CheckoutDesktop";
import CheckoutTablet from "./CheckoutTablet";
import CheckoutMobile from "./CheckoutMobile";
import { BackTop } from "antd";
export default function Checkout() {
  return (
    <div>
      <Desktop>
        <CheckoutDesktop />
      </Desktop>
      <Tablet>
        <CheckoutTablet />
      </Tablet>
      <Mobile>
        <CheckoutMobile />
      </Mobile>
      <BackTop />
    </div>
  );
}
