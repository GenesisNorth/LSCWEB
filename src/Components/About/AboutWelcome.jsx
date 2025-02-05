import { FiVideo } from "react-icons/fi";
import ButtonOne from "../../Button/ButtonOne";

const AboutWelcome = () => {
  return (
    <div className="flex px-[24px] flex-col sm:flex-row justify-between items-center w-full">
      <div className="h-full flex flex-col items-center sm:items-start">
        <div className="bg-white w-max desktop:w-[205px] h-auto rounded-lg px-5 py-2 flex items-center gap-2">
          <p className="font-Protest text-sm desktop:text-[16px] whitespace-nowrap text-black">
            The Emerging Generation
          </p>
        </div>
        <div>
          <div className="desktop:w-[542px] desktop:h-[272px] mt-4 text-center desktop:text-left">
            <h2 className="font-extrabold text-[#111111] text-[32px] desktop:text-[48px] leading-tight desktop:leading-snug">
              Welcome to where<br />
              Faith thrives and <br />
              Love unites.
            </h2>
            <p className="text-[#444444] leading-relaxed text-m mt-2 text-left">
              We believe in the transformative power of faith and
              <br /> the strength of community.
            </p>
          </div>
        </div>

        <ButtonOne
          onClick={() => window.open("https://www.youtube.com/@rccglscabuja")}
          className="w-[175px] mt-5 flex items-center justify-center gap-1 bg-[#7F56D9]"
        >
          <p>Watch Live</p>
          <FiVideo height={18} width={18} />
        </ButtonOne>
      </div>

      <div className="flex justify-center items-center w-full sm:w-auto mt-8 sm:mt-0">
        <img
          src="src/assets/pst.jpg"
          alt="About Us"
          className="w-full max-w-[800px] h-auto rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default AboutWelcome;