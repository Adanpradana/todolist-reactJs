import { useEffect } from "react";
import NotFound from "../NotFound";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Customer from "./Customer";
import Testimony from "./Testimony";
import Technology from "./Technology";
import Footer from "./Footer";
const LandingPage = () => {
  useEffect(() => {
    if (localStorage.getItem("name") && localStorage.getItem("id")) {
      window.location.replace(<NotFound />);
    }
  }, []);
  return (
    <section data-testid="test-1">
      <Navbar />
      <Hero />
      <Customer />
      <Testimony />
      <Technology />
      <Footer />
    </section>
  );
};

export default LandingPage;
