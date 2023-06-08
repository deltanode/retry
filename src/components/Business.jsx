import { features } from "../constants"
import style from "../style"
import Button from "./Button"

const Business = () => {
  return (
    <section className={`${style.paddingY} flex flex-col lg:flex-row text-white`}>
      <div className="flex-1">
        <h2 className="font-poppins font-semibold text-[48px] leading-[70px]">
          You do the business, <br /> we’ll handle the money.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[32px] pt-5 max-w-[76%]">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>

        <Button />
      </div>

      <div className="flex-1 flex flex-col justify-between gap-8 pl-8 mt-10 lg:mt-0">
        {features.map(feature => {
          return (
            <div key={feature.id} className="flex gap-6">
              <div className="flex justify-center items-center bg-dimBlue rounded-full w-[80px] m-2">
                <img src={feature.icon} alt={feature?.title} className="w-[50%] h-[]" />
              </div>

              <div className="flex flex-col">
                <h3 className="font-poppins font-bold text-white text-[18px]">{feature.title}</h3>
                <p className="font-poppins font-normal text-dimWhite text-[16px]">{feature.content}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Business
