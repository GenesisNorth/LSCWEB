import { FiVideo } from "react-icons/fi";
import ButtonOne from "../Button/ButtonOne";
import Carousel from "./Carousel";
import OppCarousel from "./OppCarousel";

const Welcome = () => {
  return (
    <div className="flex px-[24px] flex-col sm:flex-row justify-between items-center w-full">
      <div className="h-full flex flex-col items-center sm:items-start">
        <div className="bg-white w-max desktop:w-[205px] h-auto rounded-lg px-5 py-2 flex items-center gap-2">
          {/* <img src="" className="w-6 h-6" alt="Icon" /> */}
          <p className="font-Protest text-sm desktop:text-[16px] whitespace-nowrap">
            The Emerging Generation
          </p>
        </div>

        <div className="desktop:w-[542px] desktop:h-[272px] mt-4 text-center desktop:text-left">
          <h2 className="font-extrabold text-[#111111] text-[32px] desktop:text-[48px] leading-tight desktop:leading-snug">
            Welcome to The<br />
            Living Seed Church, <br />
            Abuja.
          </h2>
          <p className="text-[#444444] leading-relaxed text-lg mt-2">
            Discover a vibrant community where faith
            <br /> and fellowship flourish. Join us as we grow together in
            love, <br /> support, and spiritual enrichment
          </p>
        </div>

        <ButtonOne onClick={() => window.open('https://www.youtube.com/@rccglscabuja')}
        className="w-[175px] mt-5 flex items-center justify-center gap-1">
          <p>Watch Live</p>
          <FiVideo height={18} width={18} />
        </ButtonOne>
      </div>

      <div className="flex flex-col desktop:flex-row  gap-5 mt-8 sm:mt-0">
        <Carousel />
        <OppCarousel />
      </div>
    </div>
  );
};

export default Welcome;
