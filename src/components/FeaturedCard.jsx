import { quotes } from "../assets"

const FeaturedCard = ({ content, img, name, title }) => {
  return (
    <div className="flex flex-col gap-8 justify-between hover:bg-slate-900 rounded-2xl p-12 lg:min-w-[350px] ">
      <img src={quotes} alt="quote" className="w-[42px] w-[42px]" />

      <p className="font-poppins font-normal text-white text-[18px] leading-[31px] max-w-[250px]">{content}</p>

      <div className="flex gap-4 items-center">
        <img src={img} alt={name} className="w-[36px] h-[36px]" />
        <div className="flex flex-col">
          <h4 className="font-poppins font-semibold text-white text-[20px]">{name}</h4>
          <p className="font-poppins font-normal text-dimWhite text-[18px]">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCard
