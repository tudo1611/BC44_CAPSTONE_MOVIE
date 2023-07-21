import React from "react";
import { Desktop, Mobile, Tablet } from "../../../responsive/responsive";
import TabsMovieDesktop from "./TabsMovieDesktop";
import TabsMovieTablet from "./TabsMovieTablet";
import TabsMovieMobile from "./TabsMovieMobile";

export default function TabsMovie() {
  return (
    <div>
      <Desktop>
        <TabsMovieDesktop />
      </Desktop>
      <Tablet>
        <TabsMovieTablet />
      </Tablet>
      <Mobile>
        <TabsMovieMobile />
      </Mobile>
    </div>
  );
}
