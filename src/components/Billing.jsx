import { apple, google, bill } from "../assets"
import style, { layout } from "../style"

const Billing = () => {
  return (
    <section className={`${style.paddingY} flex gap-4 lg:flex-row flex-col-reverse`}>
      <div className="flex-1">
        <img src={bill} alt="billing & invoice" />
      </div>

      <div className="flex-1 flex flex-col gap-6 justify-center">
        <h2 className={`${style.heading2} font-semibold max-w-[470px]`}>Easily control your billing & invoicing.</h2>
        <p className={`${style.paragraph} max-w-[470px]`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className="flex gap-4">
          <img src={apple} alt="apple store" />
          <img src={google} alt="play store" />
        </div>
      </div>
    </section>
  )
}

export default Billing
