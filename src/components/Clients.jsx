import style from "../style"
import { clients } from "../constants"

const Clients = () => {
  return (
    <section className={`${style.paddingX} lg:py-0 py-10 flex items-center justify-between flex-wrap gap-4`}>
      {clients.map(client => {
        return (
          <div key={client.id}>
            <img src={client.logo} alt="client logo" className="max-w-[120px] sm:max-w-[200px] object-contain" />
          </div>
        )
      })}
    </section>
  )
}

export default Clients
