import React from "react";

import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb";
// import Hero from "../parts/Hero";
// import BrowseRoom from "../parts/HomePage/BrowseRoom";
// import JustArrived from "../parts/HomePage/JustArrived";
import Clients from "../parts/Clients";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

export default function HomePage(props) {
  return (
    <>
      <Header />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/696969", name: "Office Room" },
          { url: "/categories/696969/products/696969", name: "Details" },
        ]}
      />
      {/* <Hero/>     
      <BrowseRoom/>
      <JustArrived/> */}
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
