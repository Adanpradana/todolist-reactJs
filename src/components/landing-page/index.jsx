import { useEffect } from "react";
import NotFound from "../NotFound";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Customer from "./Customer";
import Testimony from "./Testimony";

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
    </section>
  );
};

export default LandingPage;
