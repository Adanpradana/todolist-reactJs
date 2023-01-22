import { useEffect } from "react";
import NotFound from "../NotFound";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Customer from "./Customer";
import Testimony from "./Testimony";
import Technology from "./Technology";

const LandingPage = () => {
  useEffect(() => {
    if (localStorage.getItem("name") && localStorage.getItem("id")) {
      window.location.replace(<NotFound />);
    }
  }, []);
  return (
    <section>
      <Navbar />
      <Hero />
      <Customer />
      <Testimony />
      <Technology />
    </section>
  );
};

export default LandingPage;
