import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Doctors from "./components/Doctors";
import WorkingHours from "./components/WorkingHours";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import MobileCTABar from "./components/MobileCTABar";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Doctors />
      <WorkingHours />
      <Testimonials />
      <Contact />
      <MobileCTABar />
    </>
  );
}
