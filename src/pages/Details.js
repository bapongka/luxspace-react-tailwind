import React from "react";

import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb";
// import Hero from "../parts/Hero";
// import BrowseRoom from "../parts/HomePage/BrowseRoom";
// import JustArrived from "../parts/HomePage/JustArrived";
import ProductDetails from "../parts/Details/ProductDetails";
import Suggestion from "../parts/Details/Suggestion";
// import Clients from "../parts/Clients";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

export default function HomePage() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          // { url: "/", name: "Home" },
          // { url: "/categories/696969", name: "Office Room" },
          // { url: "/categories/696969/products/696969", name: "Details" },
          { url: "/", name: "Home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/7888", name: "Details" },
        ]}
      />
      {/* <Hero/>     
      <BrowseRoom/>
      <JustArrived/> */}
      <ProductDetails />
      <Suggestion />
      {/* <Clients /> */}
      <Sitemap />
      <Footer />
    </>
  );
}
