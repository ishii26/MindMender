import Guide from "./Guide";
import Hero from "./Hero";
import Benefits from "./Benefits";
import Details from "./Details";
import Footer from "./Footer";
//import Landing, { Landingau } from "./Landingau";
import Chatbot from "./Chatbot";
import Navbar from "./Navbar";
// import Signupmodal from "./Signupmodal";

function Homepage() {
  return (
    <>
      <Navbar />
      {/* <Chatbot /> */}
      {/* <Signupmodal /> */}
      <Hero />
      <Guide />
      <Benefits />
      <Details />
      <Footer />
      {/* <Landingau /> */}
    </>
  );
}

export default Homepage;
