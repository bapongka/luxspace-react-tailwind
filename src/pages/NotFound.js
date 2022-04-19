import React from "react";
// import { Link } from "react-router-dom";

import Header from "../parts/Header";
// import Breadcrumb from "../components/Breadcrumb";
// import Hero from "../parts/Hero";
// import BrowseRoom from "../parts/HomePage/BrowseRoom";
// import JustArrived from "../parts/HomePage/JustArrived";
// import ShoppingCart from "../parts/Cart/ShoppingCart";
// import ShippingDetails from "../parts/Cart/ShippingDetails";
// import Clients from "../parts/Clients";
import PageErrorMessage from "../parts/PageErrorMessage";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

export default function NotFound() {
  return (
    <>
      <Header theme="black" />
      <PageErrorMessage />
      <Sitemap />
      <Footer />
    </>
  );
}
