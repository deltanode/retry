import { discount, robot } from "../assets"
import style from "../style"
import GetStarted from "./GetStarted"

const Hero = () => {
  return (
    <section className={`${style.marginY} flex justify-between lg:flex-row flex-col`}>
      <div className="  flex-1 flex flex-col justify-center items-start lg:p-16 p-6">
        <div className="bg-black-gradient inline-flex items-center px-3 py-2 rounded-xl">
          <img src={discount} alt="discount" className="w-[35px] h-[35px]" />
          <p className="font-poppins font-normal text-[18px] text-white pl-2">
            20% <span className="text-dimWhite">Discount For</span> 1 Month <span className="text-dimWhite">Account</span>
          </p>
        </div>

        <div className="flex justify-between items-center w-full">
          <h1 className={`font-poppins font-semibold sw:text-[68px] text-[52px] text-white`}>
            The Next <br /> <span className="text-gradient"> Generation</span>
          </h1>
          <div className="sm:block hidden">
            <GetStarted />
          </div>
        </div>

        <h1 className={`font-poppins font-semibold sw:text-[68px] text-[52px] text-white`}>Payment Method.</h1>

        <p className="font-poppins leading-[30px] text-dimWhite sw:text-[18px] text-[16px] max-w-[480px] py-3">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
      </div>

      <div className="flex-1 relative flex justify-center items-center lg:pt-0 pt-6 lg:my-0 my-0 mr-0">
        <img src={robot} alt="robot" className="w-[100%] h-[100%]  relative z-[5]" />
        <div className="absolute z-[1] w-[40%] h-[40%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[40%] h-[40%] top-0 white__gradient" />
        <div className="absolute z-[1] w-[40%] h-[40%] top-0 blue__gradient" />
      </div>

      <div className="flex justify-center items-center sm:hidden w-full pt-5">
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero
