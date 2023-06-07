import { stats } from "../constants"

const Stats = () => {
  return (
    <section className="flex justify-between items-center flex-wrap py-10 gap-4">
      {stats.map(stat => {
        return (
          <div key={stat.id} className="flex justify-start items-center">
            <h4 className="font-poppins font-semibold text-white sm:text-[42px] text-[36px]">{stat.value}</h4>
            <p className="font-poppins font-normal text-gradient sm:text-[24px] text-[18px] capitalize pl-3">{stat.title}</p>
          </div>
        )
      })}
    </section>
  )
}

export default Stats
