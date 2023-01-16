import { useEffect } from "react";
import NotFound from "../NotFound";
import Hero from "./Hero";
import Navbar from "./Navbar";

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
    </section>
  );
};

export default LandingPage;
