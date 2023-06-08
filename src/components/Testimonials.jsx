import style from "../style"
import FeaturedCard from "./FeaturedCard"
import { feedbacks } from "../constants"

const Testimonials = () => {
  return (
    <section className={`flex flex-col ${style.paddingY} lg:pr-40`}>
      <div className="flex-1 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-0 ">
        <h3 className={`${style.heading2} font-semibold`}>
          What people are <br className="hidden lg:block" /> saying about us
        </h3>
        <p className={`${style.paragraph} max-w-[72%]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>

      <div className="flex-1  relative">
        <div className="flex flex-col gap-20 pt-20 lg:flex-row justify-between items-center lg:items-stretch relative z-10">
          {feedbacks.map(feedback => {
            return <FeaturedCard key={feedback.id} {...feedback} />
          })}
        </div>
        {/* gradient */}
        <div className="absolute w-[50%] h-[50%] bg-blue-950  right-[-200px] top-[30%] blur-[100px]" />
      </div>
    </section>
  )
}

export default Testimonials
