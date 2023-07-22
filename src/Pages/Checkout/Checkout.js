import React from "react";
import { Desktop, Tablet, Mobile } from "../../responsive/responsive";
import CheckoutDesktop from "./CheckoutDesktop";
import CheckoutTable from "./CheckoutTable";
import CheckoutMobile from "./CheckoutMobile";

export default function Checkout() {
  return (
    <div>
      <Desktop>
        <CheckoutDesktop />
      </Desktop>
      <Tablet>
        <CheckoutTable />
      </Tablet>
      <Mobile>
        <CheckoutMobile />
      </Mobile>
    </div>
  );
}
