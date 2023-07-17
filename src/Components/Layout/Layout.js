import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ contentPage }) {
  return (
    <div>
      <Header />
      {contentPage}
      <Footer />
    </div>
  );
}
