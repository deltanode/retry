import style from "../style"
import Button from "./Button"
import { card } from "../assets"

const CardDeal = () => {
  return (
    <section className={`flex flex-col lg:flex-row lg:gap-12 gap-6 ${style.paddingY}`}>
      <div className="flex-1 flex flex-col gap-4 items-start justify-center ">
        <h2 className={`${style.heading2} font-semibold`}>Find a better card deal in few easy steps.</h2>
        <p className={`${style.paragraph}`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button />
      </div>

      <div className="flex-1 relative">
        <img src={card} alt="card" className="z-10 " />
        <div className="absolute w-[50%] h-[50%] bg-blue-950 blur-[200px] right-0 top-[100px]" />
      </div>
    </section>
  )
}

export default CardDeal
