import { arrowUp } from "../assets"

const GetStarted = () => {
  return (
    <div className="w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px]">
      <div className="w-[100%] h-[100%] bg-black rounded-full flex flex-col justify-center items-center">
        <div className="flex items-center">
          <p className="font-poppins font-medium text-[18px] text-gradient leading-[30px] px-1">Get</p>
          <img src={arrowUp} alt="arrow" />
        </div>
        <p className="font-poppins font-medium text-[18px] text-gradient leading-[35px]">Started</p>
      </div>
    </div>
  )
}

export default GetStarted
