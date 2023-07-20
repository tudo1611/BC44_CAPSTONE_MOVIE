import React from "react";
import Header from "../../Components/Header/Header";
import ListMovie from "./ListMovie/ListMovie";
import TabsMovie from "./TabsMovie/TabsMovie";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";

export default function HomePage() {
  return (
    <div className="bg-gray-600">
      <Header />
      <Banner />
      <ListMovie />
      <TabsMovie />
      <Footer />
    </div>
  );
}
