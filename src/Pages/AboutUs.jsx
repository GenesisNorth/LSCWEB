import AboutWelcome from "../Components/About/AboutWelcome";
import Vision from "../Components/About/Vision";
import Abitmore from "../Components/About/Abitmore";
import OurPastors from "../Components/About/OurPastors";
import Juniorchurch from "../Components/About/Juniorchurch";
import UpcomingEvents from "../Components/UpcomingEvents";
import Footer from "../Components/Footer";

const AboutUs = () => {
  return (
    <div>
      {/* Adjusted Margin to Bring Content Down */}
      <div className="h-auto w-full px-auto sm:px-[120px] flex items-start pt-[180px] pb-[23px] justify-center bg-white rounded-b-[65px] overflow-hidden">
        <AboutWelcome />
      </div>
      <div className="flex justify-center my-[100px]">
        <Vision />
      </div>
      <div>
        <Abitmore />
      </div>
      <div>
        <OurPastors />
      </div>
      <div>
        <Juniorchurch />
      </div>
      <div className="">
        <UpcomingEvents />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
