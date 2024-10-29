import styles from "../Style";
import Getstarted from "./Getstarted";
import { discount, robot } from "../assets";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* Left Side */}
    <div className={  ` ${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
      {/* Discount Section */}
      <div className="flex items-center bg-black-gradient rounded-md p-2 mb-4">
        <img src={discount} alt="Discount" className="w-[32px] h-[32px] " />
        <p className={`flex items-center text-white font-light text-[9.9px] xs:text-[12px] lg:text-[14px] xl:text-[16px] ${styles.paragraph}`}>
          <span className="mr-1">20%</span>
          <span className="text-gray-300 mr-1">DISCOUNT</span>
          <span className="mr-1">FOR</span>
          <span className="mr-1">1 MONTH</span>
          <span>ACCOUNT</span>
        </p>
      </div>

      {/* Title Section */}
      <div className="flex flex-row items-center">
        <h1 className="ss:text-[58px] text-[45px] lg:text-[72] text-white leading-[70px] font-poppins font-semibold">
          The Next<br />
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="ss:flex hidden md:mr-[4px]">
          <Getstarted />
        </div>
      </div>

      {/* Payment Method */}
      <h1 className="ss:text-[58px] text-[45px] lg:text-[72] text-white leading-[72px] font-poppins font-semibold ss:whitespace-nowrap">
        Payment Method.
      </h1>

      {/* Description */}
      <p className="text-gray-400 text-[20px] mt-4">
        Our team of Experts uses a methodology to identify <br />
        the Credit Cards most likely to fit your needs. <br />
        We examine annual percentages rates, annual rates.
      </p>
    </div>

    {/* Right Side */}
    <div className={`flex flex-1 md:py-0 py-10 ${styles.flexCenter} relative justify ss:justify-items-end sm:justify-items-center`}>
  <img 
    src={robot} 
    alt="Robot" 
    className=" z-5 ss:max-w-[600px] ss:max-h-[600px] w-full h-full" 
  />
  <div className="absolute z-0 w-[40%] h-[35%] pink__gradient top-0 "></div>
  <div className="absolute z-1 w-[80%] h-[80%] blue__gradient bottom-[140px] "></div>
  <div className="absolute z-0 w-[50%] h-[50%] white__gradient top-0"></div>
</div>

  </section>
);

export default Hero;
