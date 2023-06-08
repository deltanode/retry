import Button from "./Button"
import style from "../style"

const CTA = () => {
  return (
    <section className={`${style.paddingX} ${style.marginY} p-14 flex flex-col md:flex-row justify-between items-center bg-black-gradient rounded-2xl `}>
      <div className="flex flex-col gap-4">
        <h2 className={`${style.heading2} font-semibold`}>Let’s try our service now!</h2>
        <p className={`${style.paragraph}`}>
          Everything you need to accept card payments and <br /> grow your business anywhere on the planet.
        </p>
      </div>

      <div>
        <Button />
      </div>
    </section>
  )
}

export default CTA
