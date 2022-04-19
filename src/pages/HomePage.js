import React from "react";

import Header from "../parts/Header";
import Hero from "../parts/HomePage/Hero";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import JustArrived from "../parts/HomePage/JustArrived";
import Clients from "../parts/Clients";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";
import useModalDOM from "../helpers/hooks/useModalDOM";
import UseScrollAnchor from "../helpers/hooks/useScrollAnchor";

export default function HomePage(props) {
  useModalDOM();
  UseScrollAnchor();

  return (
    <>
      <Header theme="white" positions="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
