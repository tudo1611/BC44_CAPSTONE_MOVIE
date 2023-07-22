import React from "react";
import { Desktop, Tablet, Mobile } from "../../responsive/responsive";
import DetailDesktop from "./DetailDesktop";
import DetailTablet from "./DetailTablet";
import DetailMobile from "./DetailMobile";
export default function DetailPage() {
  return (
    <div>
      <Desktop>
        <DetailDesktop />
      </Desktop>
      <Tablet>
        <DetailTablet />
      </Tablet>
      <Mobile>
        <DetailMobile />
      </Mobile>
    </div>
  );
}
