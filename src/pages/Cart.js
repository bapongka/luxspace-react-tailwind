import React from "react";

import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb";
// import Hero from "../parts/Hero";
// import BrowseRoom from "../parts/HomePage/BrowseRoom";
// import JustArrived from "../parts/HomePage/JustArrived";
import ShoppingCart from "../parts/Cart/ShoppingCart";
import ShippingDetails from "../parts/Cart/ShippingDetails";
// import Clients from "../parts/Clients";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

export default function HomePage() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      {/* <Hero/>     
      <BrowseRoom/>
      <JustArrived/> 
      <Clients />*/}
      <Sitemap />
      <Footer />
    </>
  );
}
